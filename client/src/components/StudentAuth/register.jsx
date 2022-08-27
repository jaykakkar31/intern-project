import React, { useState } from "react";
import "../Educator/AuthEducator/EducatorSignIn.css";
import "../Educator/AuthEducator/register.css";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Joi from "joi-browser";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { signUp, studentSignupWithGoogle } from "../../services/api";
import useStyles from "./styles";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import PasswordStrengthBar from "react-password-strength-bar";

const initialState = {
	name: "",
	email: "",
	password: "",
	mobile: "",
	confirmPassword: "",
};

const Register = () => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState([]);
	const classes = useStyles();
	const history = useHistory();
	const schema = {
		email: Joi.string().email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		}),
		password: Joi.string().required().min(6).label("Password"),
		confirmPassword: Joi.string().required().label("Confirm Password"),
		name: Joi.string().min(3).required().label("Full Name"),
		mobile: Joi.string().label("Mobile Number"),
	};
	const handleSubmit = async (event) => {
		const options = { abortEarly: false };
		let errors = [];
		event.preventDefault();
		if (form.confirmPassword !== form.password)
			errors.push("Passwords do not match.");
		const result = Joi.validate(form, schema, options);
		if (!result.error) {
			setErrors(errors);
		} else {
			event.preventDefault();
			for (let item of result.error.details) {
				errors.push(item.message);
			}
			setErrors(errors);
		}
		if (errors.length > 0) return;
		event.preventDefault();
		try {
			const { data } = await signUp(form);
			console.log(data);
			history.push("/students/activate/" + data);
			// window.location = "/students/activate/" + data;
		} catch (e) {
			if (e.response && e.response.data) {
				console.log(e.response.data.message) 
				toast.error(e.response.data.message);// some reason error message
			  }
		}
	};

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	//Google
	const successResponseGoogle = async (response) => {
		console.log(response);
		try {
			localStorage.removeItem("isActivated");
			const { data: jwt } = await studentSignupWithGoogle({
				tokenId: response.tokenId,
			});
			localStorage.setItem("token", jwt);
			window.location = "/courses";
			
		} catch (ex) {
			if (ex.response) {
				toast.error(ex.response.data);
			}
		}
	};

	const failureResponseGoogle = (response) => {
		console.log(response);
	};

	return (
		<div>
			<ToastContainer />
			<Container component="main" className="educator-signup-main">
				<div className="edu-signup-img">
					<img src="/images/reading.png" height="454" alt />
				</div>
				<div className="sign-in-form">
					<h1>Sign Up</h1>
					{errors.length !== 0 && <Alert severity="error">{errors[0]} </Alert>}
					<form className={classes.form} onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Input
								name="name"
								label="Full Name"
								handleChange={handleChange}
								autoFocus
								className="sign-input"
							/>
							<Input
								name="mobile"
								label="Mobile Number"
								handleChange={handleChange}
							/>
							<Input
								name="email"
								label="Email Address"
								handleChange={handleChange}
								type="email"
							/>
							<Input
								name="password"
								label="Password"
								handleChange={handleChange}
								type="password"
							/>
							{form.password!== ''&&<PasswordStrengthBar password={form.password} />}
							<Input
								name="confirmPassword"
								label="Confirm Password"
								handleChange={handleChange}
								type="password"
							/>
                            {/* <PasswordStrengthBar password={form.confirmPassword}/> */}
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={`${classes.submit} sub-sign-btn`}
						>
							Sign Up
						</Button>
						<Grid container justify="center">
							<Grid item>
								Already have an account?
								<Button href="/students/login">
									<Link
										style={{ textDecoration: "none", fontWeight: "700" }}
										to="/students/login"
									>
										Log In
									</Link>
								</Button>
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Grid item>
								<GoogleLogin
									clientId="" //add CLIENT ID
									render={(renderProps) => (
										<Button
											onClick={renderProps.onClick}
											variant="contained"
											style={{
												backgroundColor: "red",
												color: "white",
												textTransform: "capitalize",
											}}
										>
											Signup with google
										</Button>
									)}
									onSuccess={successResponseGoogle}
									onFailure={failureResponseGoogle}
									cookiePolicy={"single_host_origin"}
								/>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default Register;
