import React, { useState, useEffect } from "react";
import http from "./services/httpService";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./components/common/privateRoute";
import ProtectedRoute2 from "./components/common/privateRoute2";
import About from "./components/About/about";
import Auth from "./components/StudentAuth/Auth";
import EducatorSignIn from "./components/Educator/AuthEducator/EducatorSignIn";
import Activate from "./components/StudentAuth/Activate";
import Logout from "./components/StudentAuth/Logout";
import Contact from "./components/common/contacts";
import EducatorActivate from "./components/Educator/AuthEducator/Activate";
import EducatorRegister from "./components/Educator/AuthEducator/register";
import EducatorLogout from "./components/Educator/AuthEducator/Logout";
import Register from "./components/StudentAuth/register";
import Home from "./components/Home/Home";
import NavBar from "./components/common/navbar";
import Course from "./components/Courses/courses";
import Profile from "./components/Student/Profile/profile";
import Educatorinfo from "./components/Educator/EducatorPersonalInfo";
import Pending from "./components/Educator/Pending";
import LiveClassForm from "./components/Educator/TeacherDashboard/TeacherLiveClass/LiveClasses";

import Account from "./components/Educator/TeacherDashboard/TeacherSettings/Account";
import Notifications from "./components/Educator/TeacherDashboard/TeacherSettings/Notifications";
import Billing from "./components/Educator/TeacherDashboard/TeacherSettings/Billing";
import Privacy from "./components/Educator/TeacherDashboard/TeacherSettings/Privacy";
import Settings from "./components/Educator/TeacherDashboard/TeacherSettings/Settings";
import CrashCourse from "./components/Student/CrashCourse/CrashCourse";
import BuyCourse from "./components/Student/BuyCourse/BuyCourse";
import LiveTestquiz from "./components/Student/LiveTestQuiz/LiveTestQuiz";
import Syllabus from "./components/Student/Syllabus/Syllabus";
import TeacherChat from "./components/Educator/TeacherDashboard/TeacherChat/TeacherChat";
import TeacherHome from "./components/Educator/TeacherDashboard/TeacherHome/TeacherHome";
import TeacherSchedule from "./components/Educator/TeacherDashboard/TeacherSchedule/TeacherSchedule";
import TeacherVideos from "./components/Educator/TeacherDashboard/TeacherVideos/TeacherVideos";

import TeacherProfile from "./components/Educator/TeacherProfile/TeacherProfile";
import Footer from "./components/common/Footer";
import Blogs from "./components/Blogs/blogs.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/privacy";
import Recent from "./components/Blogs/recent";
import Batch from "./components/Batches/Batch";
import VideoLecture from "./components/common/VideoLecture/VideoLecture";
import { createTheme, ThemeProvider } from "@material-ui/core";
import BatchForm from "./components/Educator/TeacherDashboard/TeacherLiveClass/LiveBatch/Batches";

import { fetchId, deleteId } from "./services/api";

import Broadcast from "./components/Broadcasthome/home";
import Livecast from "./components/liveCast/liveCast";
import VerificationFailed from "./components/Educator/failed";
import Verified from "./components/Educator/verify";
import Calender from "./components/Calender/Calender";
import ScrollToTop from "./ScrollToTop";
import UserForm from './admin/UserForm'
import AdminHome from "./admin/AdminHome.js";
import AdminStarred from "./admin/AdminStarred.js";
import AdminSent from "./admin/AdminSent.js";
import AdminNavbar from "./admin/AdminNavbar.jsx";
import ClassSoon from "./components/Courses/ClassSoon";

const shortid = require("shortid");

require("dotenv").config();

//theme
const theme = createTheme({
	palette: {
		primary: {
			main: "#6BE760",
			contrastText: "#fff",
		},
	},
});
const App = () => {
	const [student, setStudent] = useState({});
	const [educator, setEducator] = useState({});

	useEffect(() => {
		async function Start() {
			const jwt = localStorage.getItem("token");
			if (jwt) {
				const student_jwt = jwtDecode(jwt);
				console.log(student_jwt);
				const { data } = await http.get(
					// `https://limitless-savannah-12904.herokuapp.com/students/${student_jwt._id}`
					`/students/${student_jwt._id}`
				);
				setStudent(data);
			}
		}
		Start();
	}, []);

	useEffect(() => {
		async function Start() {
			const jwt = localStorage.getItem("educatorToken");
			if (jwt) {
				const educator_jwt = jwtDecode(jwt);
				const id = educator_jwt._id;
				// const j = JSON.parse(jwt);
				// console.log(j);
				console.log(id);

				console.log(jwt);
				console.log(educator_jwt);
				const { data } = await http.get(
					// `https://limitless-savannah-12904.herokuapp.com/educator/${educator_jwt._id}`
					`/educator/${id}`
				);
				console.log(data);
				setEducator(data);
			}
		}
		Start();
	}, []);

	// const [id, setId] = useState();
	const [disable, setDisable] = useState(false);
	const [joinDisable, setJoinDisable] = useState(true);
	var id;
;
	useEffect(() => {
		if (window.localStorage.getItem("idRoom")) {
			if (window.localStorage.getItem("educatorToken")) {
				
				// setId();
				setDisable(false);
				setJoinDisable(true);
			}
            id =( window.localStorage.getItem("idRoom"));
		} else {
			// setId(id);
			id=( shortid.generate());
			console.log(id);
			setDisable(true);
			setJoinDisable(false);

			window.localStorage.setItem("idRoom", id);
		}
	});

	console.log(id, "MEETID");
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter basename="/">
				<ScrollToTop />
				<NavBar student={student} educator={educator} />
				{/* when a educator is logged in and their accessible routes  */}
				{educator._id ? (
					educator.personalInfo.verified ? (
						<Switch>
							<Route
								path="/educator/settings/account/:id"
								render={(props) => <Account {...props} educator={educator} />}
							/>
							<Route
								path="/educator/settings/notifications/:id"
								render={(props) => (
									<Notifications {...props} educator={educator} />
								)}
							/>
							<Route
								path="/educator/settings/bankDetails/:id"
								render={(props) => <Billing {...props} educator={educator} />}
							/>
							<Route
								path="/educator/settings"
								exact
								render={(props) => <Settings {...props} educator={educator} />}
							/>
							<Route
								path="/educator/settings/privacy/:id"
								render={(props) => <Privacy {...props} educator={educator} />}
							/>
							<Route
								exact
								path="/educator/liveclass"
								render={(props) => (
									<LiveClassForm {...props} educator={educator} />
								)}
							/>
							<Route
								exact
								path="/educator/batch"
								render={(props) => <BatchForm {...props} educator={educator} />}
							/>

							<Route exact path="/educator">
								<TeacherHome />
							</Route>
							<Route exact path="/educator/myvideos">
								<TeacherVideos />
							</Route>
							<Route exact path="/educator/schedule">
								<TeacherSchedule />
							</Route>
							<Route
								exact
								path="/educator/chat"
								render={(props) => (
									<TeacherChat {...props} educator={educator} />
								)}
							/>
							<Route exact path="/educator/profile">
								<TeacherProfile />
							</Route>
						</Switch>
					) : educator.isAuthenticated ? (
						<>
							<Switch>
								<Route exact path="/pending" component={Pending} />
								<Route
									path="/educator/personalInfo/:id"
									render={(props) => (
										<Educatorinfo {...props} educator={educator} />
									)}
								/>
							</Switch>
							<Redirect to={"/educator/personalInfo/" + educator._id} />
						</>
					) : (
						<Redirect to={"/educator/activate/" + educator._id} />
					)
				) : (
					<>
						<Switch>
							<Route
								path="/educator/activate/:educatorToken"
								exact
								render={(props) => <EducatorActivate {...props} />}
							/>
						</Switch>
						<Redirect to="/educator/login" />
					</>
				)}
				{/* educator and student both logged in can access these routes */}
				{educator._id || student._id ? (
					<Switch>
						<Route
							exact
							path="/iitjee"
							render={(props) => <CrashCourse {...props} student={student} />}
						/>

						<ProtectedRoute
							path="/me"
							render={(props) => <Profile {...props} student={student} />}
						/>
						<Route
							path="/students/activate/:token"
							exact
							render={(props) => <Activate {...props} />}
						/>
						<Route exact path="/iitjee/syllabus">
							<Syllabus />
						</Route>
						<Route exact path="/iitjee/livetest">
							<LiveTestquiz />
						</Route>
						<Route
							exact
							path="/iitjee/buycourse"
							render={(props) => <BuyCourse {...props} student={student} />}
						/>
						<Route exact path="/calender">
							<Calender />
						</Route>
					</Switch>
				) : (
					!educator._id &&
					!student._id && (
						<>
							<Switch>
								<Route
									path="/students/activate/:token"
									exact
									render={(props) => <Activate {...props} />}
								/>
							</Switch>
							<Redirect to="/" />
						</>
					)
				)}
				{/* if user is not logged in */}
				{!educator._id && !student._id ? (
					<Switch>
						<Route path="/students/login" component={Auth} />
						<Route path="/students/register" component={Register} />
						<Route
							path="/educator/login"
							render={(props) => (
								<EducatorSignIn {...props} educator={educator} />
							)}
						/>
						<Route path="/educator/register" component={EducatorRegister} />
					</Switch>
				) : (
					<Redirect
						to={`${
							educator._id
								? educator.isAuthenticated
									? educator.personalInfo.verified
										? "/educator"
										: "/educator/personalInfo/" + educator._id
									: "/educator/activate/" + educator._id
								: "/courses"
						}`}
					/>
				)}
				<Switch>
					<Route path="/logout" exact component={Logout} />

					{/* <Route path="/educator/logout" exact component={EducatorLogout} /> */}

					<Route exact path="/about" exact component={About} />
					<Route exact path="/freelecture/:id">
						<VideoLecture id={id} />
					</Route>
					<Route exact path="/blogs" component={Blogs} />
					<Route exact path="/blogs/recent" component={Recent} />
					<Route exact path="/privacypolicy" component={PrivacyPolicy} />
					<Route exact path="/courses" component={Course} />
					<Route
						exact
						path="/students/batch"
						render={(props) => <Batch {...props} student={student} />}
					/>
					<Route path="/contact" component={Contact} />
					<Route path="/" exact component={Home} />

					<Route exact path="/verified" component={Verified} />

					<Route exact path="/educator/liveclass/broadcast">
						<Broadcast id={id} disable={disable} joinDisable={joinDisable} />
					</Route>
					<Route exact path="/failed" component={VerificationFailed} />
					<Route exact path="/educator/liveclass/broadcast/:id">
						{" "}
						<Livecast setJoinDisable={setJoinDisable} setDisable={setDisable} />
					</Route>
						<Route exact path="/educator/courses/comingsoon"><ClassSoon/></Route>
					<Route exact path="/educator/admin/adminhome/inbox/:id">
						<UserForm />
					</Route>
					<Route exact path="/educator/admin/adminhome/inbox">
						<AdminHome />
					</Route>
					<Route exact path="/educator/admin/adminhome/starred">
						<AdminStarred />
					</Route>
					<Route exact path="/educator/admin/adminhome/sent">
						<AdminSent />
					</Route>
					<Route exact path="/educator/admin/navbar">
						<AdminNavbar />
					</Route>
                    {/* <Route exact path="/">
                        <VideoLecture/>
                    </Route> */}

					{/* <Route exact path="/crashcourse">
    <CrashCourse />
  </Route> */}
				</Switch>
				<Footer student={student} educator={educator} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
