import React, { useState } from "react";
import './EducatorSignIn.css'
import './register.css'
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import http from "../../../services/httpService";
import { Alert } from "@material-ui/lab";
import Joi from "joi-browser";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { educatorSignup } from "../../../actions/auth";
import { educatorSignupWithGoogle, teacherSignUp } from "../../../services/api";
import useStyles from "../../StudentAuth/styles";
import Input from "./Input";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  confirmPassword: "",
};
import PasswordStrengthBar from "react-password-strength-bar";


const EducatorRegister = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
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
      const { data } = await teacherSignUp(form);
      console.log(data);
      history.push(`/educator/activate/${data}`)
      // window.location = "/educator/activate/" + data;
      dispatch(educatorSignup(form, history));
    } catch (ex) {
      toast.error(ex);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  
   //Google
   const successResponseGoogle = async (response) => {
    console.log(response);
    try {
      localStorage.removeItem("educatorIsActivated");
      const { data: jwt } = await educatorSignupWithGoogle({tokenId : response.tokenId});
      localStorage.setItem("educatorToken", jwt);
      const id = jwtDecode(jwt);
      // console.log(id._id);
      // window.location = "/educator/personalInfo/" + id._id;
      const { data } = await http.get(
        `/educator/${id._id}`
      );
      console.log(data.personalInfo.verified);
     window.location =  data.personalInfo.verified?"/educator" : ("/educator/personalInfo/" + data._id);
    } catch (ex) {
      if (ex.response) {
        toast.error(ex.response.data);
      }
    }
  }

  const failureResponseGoogle = (response) => {
    console.log(response);
  }

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
							{form.password !== '' && <PasswordStrengthBar password={form.password} />}
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
								<Button>
									<Link
										style={{ textDecoration: "none", fontWeight: "700" }}
										to="/educator/login"
									>
										Log In
									</Link>
								</Button>
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Grid item>
								<GoogleLogin
									clientId="826976354916-39ge22j56dfllgdggs5fgbp6kh4s70js.apps.googleusercontent.com" //add clientID of Google
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

export default EducatorRegister;
