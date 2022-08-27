import React, { useState } from "react";
import "../Educator/AuthEducator/EducatorSignIn.css";
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import Joi from "joi-browser";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { ToastContainer, toast } from "react-toastify";
import useStyles from "./styles";
import Input from "./Input";
import { signIn, studentSignupWithGoogle } from "../../services/api";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const initialState = { email: "", password: "" };

const SignUp = () => {
	const [form, setForm] = useState(initialState);
	const [errors, setErrors] = useState([]);
	const classes = useStyles();
	const schema = {
		email: Joi.string().email({
			minDomainSegments: 2,
			tlds: { allow: ["com", "net"] },
		}),
		password: Joi.string().required().min(6).label("Password"),
	};

	// function to be on submission of a form
	const handleSubmit = async (event) => {
		const options = { abortEarly: false };
		// finding errors
		let errors = [];
		event.preventDefault();
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
		// calling backend services
		try {
			localStorage.removeItem("isActivated");
			const { data: jwt } = await signIn(form);
			localStorage.setItem("token", jwt);
			window.location = "/courses";
		} catch (ex) {
			if (ex.response) {
				toast.error(ex.response.data);
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
			<Container component="main" className="educator-signin-main">
				<div className="edu-img">
					<img src="/images/reading.png" height="454" alt />
				</div>
				<div className="sign-in-form">
					<h1>Log In</h1>
					{localStorage.getItem("isActivated") === "true" && (
						<Alert severity="success">
							Your accoun't have been activated. <br /> Login here to sign IN to
							your account
						</Alert>
					)}
					{errors.length !== 0 && <Alert severity="error">{errors[0]} </Alert>}
					<form className={classes.form} onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Input
								name="email"
								label="Email Address"
								handleChange={handleChange}
								type="email"
								className="sign-input"
							/>
							<Input
								name="password"
								label="Password"
								handleChange={handleChange}
								type="password"
							/>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={`${classes.submit} sub-sign-btn`}
						>
							Sign In
						</Button>
						<Grid container justify="center">
							<Grid item>
								Don't have an account?
								<Button>
									<Link
										style={{ textDecoration: "none", fontWeight: "700" }}
										to="/students/register"
									>
										Sign Up
									</Link>
								</Button>
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Grid item>
								<GoogleLogin
									clientId="528594815758-eup7o165ol5p4eit87867vfvmebdbv8n.apps.googleusercontent.com" //add CLIENT ID
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
											SignIn with google
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

export default SignUp;
