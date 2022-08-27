const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { Student } = require("../models/student");
const sgMail = require("@sendgrid/mail");
const { errorHandler } = require("../helpers/dbErrorHandling");
const { validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");

sgMail.setApiKey(
	"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"
);
//for google signup
const client = new OAuth2Client(process.env.CLIENT_ID);

// function to register users.
exports.registerController = async (req, res) => {
	var { name, email, mobile, password } = req.body;
	// validating input
	const errors = validationResult(req);
	console.log(errors);
	if (!errors.isEmpty()) {
		//cheking for errors
		const firstError = errors.array().map((error) => error.msg);
		return res.status(422).json({
			errors: firstError,
		});
	} else {
		// check if the user already exists
		const student = await Student.findOne({ email });
		if (student && student.isAuthenticated === false)
			return res.json({
				message: `Account verification pending. Your verification code is ${student.verificationCode}`,
			});
		else if (student) return res.status(400).json({message : "User already registered"});
	}
	try {
		// hash the password
		password = await bcrypt.hash(password, 10);
	} catch (error) {
		console.log(error);
	}
	// generating verification code
	let verification_code = "";
	const characters = "0123456789";
	for (let i = 0; i < 6; i++)
		verification_code +=
			characters[Math.floor(Math.random() * characters.length)];
	const emailData = {
		from: process.env.EMAIL_FROM,
		to: email,
		subject: "Account activation link",
		html: ` <p>Please use the following code activate your account - </p>
            <p>${verification_code}</p>
            <hr />`,
	};
	// sending mail to registerd user containing  account activation code.
	sgMail
		.send(emailData)
		.then(async (sent) => {
			student = new Student({
				name: name,
				email: email,
				mobile: mobile,
				password: password,
				isAuthenticated: false,
				verificationCode: verification_code,
			});
			try {
				await student.save();
				res.send(student._id);
			} catch (err) {
				return res.json({ message: err.message });
			}
		})
		.catch((err) => {
			return res.status(400).json({
				success: false,
				errors: errorHandler(err),
			});
		});
};

exports.activationController = async (req, res) => {
	const student = await Student.findById(req.params.id);
	if (!student) return res.status(400).json({ message: "Invalid Request" });
	const { verificationCode } = req.body;
	if (student.isAuthenticated === true)
		return res.status(400).json({ message: "User already verified." });
	// checking if verification code is correct and updating user details accordingly
	if (student.verificationCode === verificationCode) {
		student.isAuthenticated = true;
		try {
			await student.save();
			return res.send({
				message: "Your account has been verified successfully",
			});
		} catch (error) {
			return res.json({ message: error.message });
		}
	} else {
		return res.status(400).json({ message: "Verification Code Invalid" });
	}
};

exports.userFindController = async (req, res) => {
	const id = req.params.id;
	try {
		const student = await Student.findById(id);
		return res.status(200).send(student);
	} catch (ex) {
		res.send(ex);
	}
};

exports.signInController = async (req, res) => {
	const { email, password } = req.body;
	// validate input
	const errors = validationResult(req);
	// return errors if any
	if (!errors.isEmpty()) {
		const firstError = errors.array().map((error) => error.msg)[0];
		console.log(firstError);
		return res.status(422).json({
			errors: firstError,
		});
	} else {
		// check if the user is registered
		const student = await Student.findOne({ email: email });
		if (!student)
			return res.status(400).json({ message: "Invalid email or password" });
		if (student.isAuthenticated === false) {
			return res.json({
				message: `Account verification pending. `,
			});
		}
		// check if the password is correct
		const validpassword = await bcrypt.compare(password, student.password);
		if (!validpassword)
			return res.status(400).send("invalid email or password");
		// if all fine, generate Jwt token.
		const token = jwt.sign(
			{
				_id: student._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "7d" }
		);
		return res.send(token);
	}
};

//Signup with google  /////////////////////
exports.googleSignInController = async (req, res) => {
	const { tokenId } = req.body;
	await client
		.verifyIdToken({ idToken: tokenId, audience: process.env.CLIENT_ID })
		.then((response) => {
            console.log(response);
			const { email_verified, name, email } = response.payload;
			if (email_verified) {
				Student.findOne({ email }).exec(async (err, user) => {
					if (err) {
						return res.send(400).json({ error: "Something went wrong...." });
					} else {
						if (user) {
							console.log(user);
							const token = jwt.sign(
								{
									_id: user._id,
								},
								process.env.JWT_SECRET,
								{ expiresIn: "7d" }
							);
							return res.send(token);
						} else {
							let student = new Student({
								name,
								email,
								isAuthenticated: "true",
							});
							console.log(student);
							try {
								await student.save();
								console.log(student._id);
								const token = jwt.sign(
									{
										_id: student._id,
									},
									process.env.JWT_SECRET,
									{ expiresIn: "7d" }
								);
								return res.send(token);
							} catch (error) {
								console.log(error);
								return res
									.status(400)
									.json({ error: "something went wrong..." });
							}
						}
					}
				});
			}
			console.log(response.payload);
		});
};

// simple update function to update user mobile and name after registering
exports.updateController = async (req, res) => {
	let student = await Student.findById(req.params.id);
	if (!student) return res.status(400).send("User doesn't exists");
	const { name, mobile } = req.body;
	student.name = name;
	student.mobile = mobile;
	const result = await student.save();
	res.send(result);
};

// function to update notification details of a user.
exports.notificationController = async (req, res) => {
	let student = await Student.findById(req.params.id);
	if (!student) return res.status(400).send("student doesn't exists");
	const { notifications } = req.body;
	// console.log(req.body);
	student.notifications = notifications;
	const result = await student.save();
	res.send(result);
};

//add subsrciption course
exports.addCourseController = async (req, res) => {
	let student = await Student.findById(req.params.id);
	if (!student) return res.status(400).send("student doesn't exist");
	const course = req.body;
	student.subscription.push(course);
	await student.save();
	res.status(200).send("successfully added course");
};
