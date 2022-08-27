import React, { useState } from "react";
import './EducatorSignIn.css'
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import jwtDecode from "jwt-decode";
import http from "../../../services/httpService";
import Joi from "joi-browser";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { ToastContainer, toast } from "react-toastify";
import useStyles from "../../StudentAuth/styles";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { educatorSignin } from "../../../actions/auth";
import { educatorSignIn, educatorSignupWithGoogle } from "../../../services/api";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
const initialState = { email: "", password: "" };


const EducatorSignIn = ({ educator }) => {
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
  };
  // function to be on submission of a form
  const handleSubmit = async (event) => {
    const options = { abortEarly: false };
    console.log(educator);

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
      localStorage.removeItem("educatorIsActivated");
      const { data: jwt } = await educatorSignIn(form);
      localStorage.setItem("educatorToken", jwt);
      dispatch(educatorSignin(form, history));
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
			<Container component="main" className="educator-signin-main">
				<div className="edu-img">
					<img src="/images/reading.png" height="454" alt />
				</div>
				<div className="sign-in-form">
					<h1>Log In</h1>
					{localStorage.getItem("educatorIsActivated") === "true" && (
						<Alert severity="success">
							Your account have been activated. <br /> Login here to Sign In to
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
										to="/educator/register"
									>
										Sign Up
									</Link>
								</Button>
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Grid item>
								<GoogleLogin
									clientId="528594815758-eup7o165ol5p4eit87867vfvmebdbv8n.apps.googleusercontent.com" //add clientID of Google
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

export default EducatorSignIn;
