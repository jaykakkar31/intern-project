const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { Educator } = require("../models/educator");
const { videoId } = require("../models/VideoId");
const sgMail = require("@sendgrid/mail");
const { errorHandler } = require("../helpers/dbErrorHandling");
const { validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");
// sgMail.setApiKey(
//   "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"
// );
sgMail.setApiKey(
	"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"
);

//for google signup
const client = new OAuth2Client(process.env.CLIENT_ID);

exports.registerController = async (req, res) => {
	var { name, email, mobile, password, selectedFile } = req.body;
	const errors = validationResult(req);
	console.log(errors);
	if (!errors.isEmpty()) {
		const firstError = errors.array().map((error) => error.msg);
		return res.status(422).json({
			errors: firstError,
		});
	} else {
		const educator = await Educator.findOne({ email });
		//  console.log(educator);
		if (educator && educator.isAuthenticated === false)
			return res.json({
				message: `Account verification pending. Your verification code is ${educator.verificationCode}`,
			});
		else if (educator) return res.status(400).send("User already registered");
	}
	try {
		password = await bcrypt.hash(password, 10);
	} catch (error) {
		console.log(error);
	}
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
	sgMail
		.send(emailData)
		.then(async (sent) => {
			educator = new Educator({
				name: name,
				email: email,
				mobile: mobile,
				password: password,
				selectedFile: selectedFile,
				isAuthenticated: false,
				verificationCode: verification_code,
			});
			try {
				await educator.save();
				return res.send(educator._id);
			} catch (err) {
				console.log(err);
				return res.json({ message: err.message });
			}
		})
		.catch((err) => {
			console.log(err);
			return res.status(400).json({
				success: false,
				errors: errorHandler(err),
			});
		});
};

exports.activationController = async (req, res) => {
	const educator = await Educator.findById(req.params.id);
	if (!educator) return res.status(400).json({ message: "Invalid Request" });
	const { verificationCode } = req.body;
	if (educator.isAuthenticated === true)
		return res.status(400).json({ message: "User already verified." });
	if (educator.verificationCode === verificationCode) {
		educator.isAuthenticated = true;
		try {
			await educator.save();
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
		const educator = await Educator.findById(id);
		res.send(educator);
	} catch (ex) {
		res.send(ex);
	}
};

exports.signInController = async (req, res) => {
	const { email, password } = req.body;
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const firstError = errors.array().map((error) => error.msg)[0];
		console.log(firstError);
		return res.status(422).json({
			errors: firstError,
		});
	} else {
		const educator = await Educator.findOne({ email: email });
		if (!educator)
			return res.status(400).json({ message: "Invalid email or password" });
		if (educator.isAuthenticated === false) {
			return res.json({
				message: `Account verification pending. `,
			});
		}
		const validpassword = await bcrypt.compare(password, educator.password);
		if (!validpassword)
			return res.status(400).send("invalid email or password");
		const educatorToken = jwt.sign(
			{
				_id: educator._id,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "7d" }
		);
		return res.send(educatorToken);
	}
};

//Signup with google  /////////////////////
exports.googleSignInController = async (req, res) => {
	const { tokenId } = req.body;
	await client
		.verifyIdToken({ idToken: tokenId, audience: process.env.CLIENT_ID })
		.then((response) => {
			const { email_verified, name, email } = response.payload;
			if (email_verified) {
				Educator.findOne({ email }).exec(async (err, user) => {
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
							let educator = new Educator({
								name,
								email,
								isAuthenticated: "true",
							});
							try {
								await educator.save();
								console.log(educator._id);
								const token = jwt.sign(
									{
										_id: educator._id,
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

exports.updateController = async (req, res) => {
	let educator = await Educator.findById(req.params.id);
	// const id = educator._id;
	if (!educator) return res.status(400).send("User doesn't exists");
	const {
		name,
		mobile,
		country,
		district,
		state,
		pincode,
		currentAdd,
		new_pswrd,
	} = req.body;
	try {
		const pswrd = await bcrypt.hash(new_pswrd, 10);
	} catch (error) {
		console.log(error);
	}
	educator.mobile = mobile;
	educator.personalInfo.name = name;
	educator.personalInfo.pincode = pincode;
	educator.personalInfo.country = country;
	educator.personalInfo.state = state;
	educator.personalInfo.district = district;
	educator.personalInfo.currentAdd = currentAdd;
	educator.password = pswrd;
	const result = await educator.save();
	res.send(result);
};

exports.infoController = async (req, res) => {
	let educator = await Educator.findById(req.params.id);
	// const id = educator._id;
	console.log(educator);
	if (!educator) return res.status(400).send("User doesn't exists");
	const {
		fullname,
		email,
		mobile,
		pincode,
		country,
		state,
		district,
		currentAdd,
		permanentAdd,
		linkedin,
		twitter,
		youtube,
		website,
		school,
		schoolStart,
		schoolEnd,
		university,
		universityEnd,
		universityStart,
		experienceOrg,
		orgStart,
		orgEnd,
		resume,
		video,
	} = req.body;
	educator.personalInfo.name = fullname;
	// educator.personalInfo.lName = lName;
	educator.personalInfo.pincode = pincode;
	educator.personalInfo.country = country;
	educator.personalInfo.state = state;
	educator.personalInfo.district = district;
	educator.personalInfo.currentAdd = currentAdd;
	educator.personalInfo.permanentAdd = permanentAdd;
	educator.personalInfo.linkedin = linkedin;
	educator.personalInfo.youtube = youtube;
	educator.personalInfo.twitter = twitter;
	educator.personalInfo.website = website;
	educator.personalInfo.school = school;
	educator.personalInfo.schoolStart = schoolStart;
	educator.personalInfo.schoolEnd = schoolEnd;
	educator.personalInfo.university = university;
	educator.personalInfo.universityStart = universityStart;
	educator.personalInfo.universityEnd = universityEnd;
	educator.personalInfo.experienceOrg = experienceOrg;
	educator.personalInfo.orgStart = orgStart;
	educator.personalInfo.orgEnd = orgEnd;
	educator.personalInfo.resume = resume;
	educator.personalInfo.video = video;
	educator.mobile = mobile;
	educator.email = email;
	const result = await educator.save();
	res.send(result);
};
// function to update notification details of a educator.
exports.notificationController = async (req, res) => {
	let educator = await Educator.findById(req.params.id);
	const id = educator.id;
	if (!educator) return res.status(400).send("educator doesn't exists");
	const { sms, chat, email } = req.body;
	educator.notifications.sms = sms;
	educator.notifications.chat = chat;
	educator.notifications.email = email;

	const result = await educator.save();
	res.send(result);
};

exports.bankDetailsController = async (req, res) => {
	let educator = await Educator.findById(req.params.id);
	if (!educator) return res.status(400).send("educator doesn't exists");
	else {
		const { accountNo, ifsc, holder, bankName, upi } = req.body;
		educator.bankDetails.accountNo = accountNo;
		educator.bankDetails.ifsc = ifsc;
		educator.bankDetails.holder = holder;
		educator.bankDetails.bankName = bankName;
		educator.bankDetails.upi = upi;
		// const { bankDetails } = req.body;
		// educator.bankDetails = bankDetails;
		const result = await educator.save();
		res.send(result);
	}
};

exports.privacyController = async (req, res) => {
	let educator = await Educator.findById(req.params.id);
	if (!educator) return res.status(400).send("educator doesn't exists");
	const { location, twoStepAuth } = req.body;
	educator.privacy.location = location;
	educator.privacy.twoStepAuth = twoStepAuth;

	const result = await educator.save();
	res.send(result);
};

exports.videoIdController = async (req, res) => {
	console.log(req.body);
    const d = { videoId:req.body.data };
	const newId = new videoId(d);
    // videoId.find({},(err,))
	newId.save((err)=>{
        if (!err){
            console.log("SAVED");
        }
    });
};
