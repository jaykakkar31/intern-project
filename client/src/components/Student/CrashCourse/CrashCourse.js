import React, { useEffect, useState } from "react";
import StudentSideBar from "../../common/Sidebar/StudentSideBar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Button } from "@material-ui/core";
import "./CrashCourse.css";
import LiveClass from "../../common/LiveClass/LiveClass";
import Test from "../../common/Test/Test";
import UpcomingClass from "../../common/UpcomingClass/UpcomingClass";
import CrashHeader from "../../common/CrashHeader/CrashHeader";
import { classUpdate } from "../../../services/api";
const shortid = require("shortid");

function CrashCourse({ student }) {
	const [see1, setSee1] = useState(false);
	const [see2, setSee2] = useState(false);
	const [see3, setSee3] = useState(false);
	const [see4, setSee4] = useState(false);
	const [classData, setClassData] = useState({
		liveclass: [
			{
				date: "Today",
				classes: [
					{
						img: "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
						name: "Robert Woges",
						subject: "Chemistry",
						time: "10 am",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
						name: "Robert Woges",
						subject: "Chemistry",
						time: "3 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
						name: "Robert Woges",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
						name: "Robert Woges",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
						name: "Robert Woges",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
						name: "Robert Woges",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
				],
			},
			{
				date: "Tomorrow",
				classes: [
					{
						img: "https://image.shutterstock.com/image-photo/laboratory-research-scientific-glassware-chemical-260nw-608671094.jpg",
						subject: "Chemistry",
						time: "10 am",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://image.shutterstock.com/image-photo/laboratory-research-scientific-glassware-chemical-260nw-608671094.jpg",
						subject: "Chemistry",
						time: "3 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://image.shutterstock.com/image-photo/laboratory-research-scientific-glassware-chemical-260nw-608671094.jpg",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://image.shutterstock.com/image-photo/laboratory-research-scientific-glassware-chemical-260nw-608671094.jpg",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://image.shutterstock.com/image-photo/laboratory-research-scientific-glassware-chemical-260nw-608671094.jpg",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
					{
						img: "https://image.shutterstock.com/image-photo/laboratory-research-scientific-glassware-chemical-260nw-608671094.jpg",
						subject: "Chemistry",
						time: "6 pm",
						topic: "Basic Fundamental of Chemistry",
					},
				],
			},
		],
		testquiz: [
			{
				date: "Today",
				test: [
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "10 am",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "12 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "3 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "3 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "3 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "6 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
				],
			},

			{
				date: "Tomorrow",
				test: [
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "10 am",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "12 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "3 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "3 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "3 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
					{
						topic: "Basic Fundamental of Organic Chemistry",
						time: "6 pm",
						subject: "Chemistry",
						duration: "1 hour",
					},
				],
			},
		],
	});
	//when backend connected
	// useEffect( async() => {
	//   try {
	//     const clsData = await classUpdate();
	//     setClassData(clsData.data[0]);
	//   } catch (error) {
	//     console.log(error);
	//   }
	// }, []);

	const [id, setId] = useState();
	// }
	// var id ;

	useEffect(() => {
		if (window.localStorage.getItem("idRoom")) {
			setId(window.localStorage.getItem("idRoom"));
		} else {
			// setId(id);
            setId(shortid.generate())
			console.log(id);

			window.localStorage.setItem("idRoom", id);
		}
	});

    console.log(id);
	return (
		<div className="crash-home">
			<StudentSideBar />
			<div className="c-h-right">
				<CrashHeader />
				<div className="c-h-main">
					<div className="c-h-time">
						<h1>Home</h1>
						<input type="date" name="date" />
					</div>
					{classData ? (
						<div className="time-table">
							<div className="best-cl">
								<h3>Today's Live Classes</h3>
								<p
									onClick={() => {
										setSee1(true);
									}}
									style={{ display: `${see1 ? "none" : "flex"}` }}
								>
									See All
								</p>
							</div>
							<div className="class-courses" id="c-h-course">
								{classData.liveclass.map((eachClass) => {
									if (eachClass.date === "Today")
										if (!see1)
											return eachClass.classes.map((cls, index) => {
												if (index < 3)
													return (
														<LiveClass
															id={id}
															key={index}
															img={cls.img}
															name={cls.name}
															subject={cls.subject}
															topic={cls.topic}
															time={`Today ${cls.time}`}
															start="Starts in : 3 hours "
															student={student}
														/>
													);
											});
										else
											return eachClass.classes.map((cls, index) => {
												return (
													<LiveClass
														key={index}
														img={cls.img}
														name={cls.name}
														subject={cls.subject}
														topic={cls.topic}
														time={`Today ${cls.time}`}
														start="Starts in : 3 hours "
														student={student}
													/>
												);
											});
								})}
							</div>

							<div className="best-cl">
								<h3>Today's tests and quizzes</h3>
								<p
									onClick={() => {
										setSee2(true);
									}}
									style={{ display: `${see2 ? "none" : "flex"}` }}
								>
									See All
								</p>
							</div>
							<div className="class-courses" id="c-h-course">
								{classData.testquiz.map((eachTest) => {
									if (eachTest.date === "Today")
										if (!see2)
											return eachTest.test.map((tst, index) => {
												if (index < 3)
													return (
														<Test
															key={index}
															topic={tst.topic}
															subject={tst.subject}
															time={`Today ${tst.time}`}
															duration={tst.duration}
														/>
													);
											});
										else
											return eachTest.test.map((tst, index) => {
												return (
													<Test
														key={index}
														subject={tst.subject}
														topic={tst.topic}
														time={`Today ${tst.time}`}
														duration={tst.duration}
													/>
												);
											});
								})}
							</div>

							<div className="best-cl">
								<h3>Upcoming Classes</h3>
								<p
									onClick={() => {
										setSee3(true);
									}}
									style={{ display: `${see3 ? "none" : "flex"}` }}
								>
									See All
								</p>
							</div>
							<div className="class-courses" id="c-h-course">
								{classData.liveclass.map((eachClass) => {
									if (eachClass.date === "Tomorrow")
										if (!see3)
											return eachClass.classes.map((cls, index) => {
												if (index < 3)
													return (
														<UpcomingClass
															key={index}
															image={cls.img}
															subject={cls.subject}
															topic={cls.topic}
															time="Opens in 3 days"
														/>
													);
											});
										else
											return eachClass.classes.map((cls, index) => {
												return (
													<UpcomingClass
														key={index}
														image={cls.img}
														subject={cls.subject}
														topic={cls.topic}
														time="Opens in 3 days"
													/>
												);
											});
								})}
							</div>

							<div className="best-cl">
								<h3>Upcoming Tests and quizzes</h3>
								<p
									onClick={() => {
										setSee4(true);
									}}
									style={{ display: `${see4 ? "none" : "flex"}` }}
								>
									See All
								</p>
							</div>
							<div className="class-courses" id="c-h-course">
								{classData.testquiz.map((eachTest) => {
									if (eachTest.date === "Tomorrow")
										if (!see4)
											return eachTest.test.map((tst, index) => {
												if (index < 3)
													return (
														<Test
															key={index}
															topic={tst.topic}
															subject={tst.subject}
															time={`Tomorrow ${tst.time}`}
															duration={tst.duration}
														/>
													);
											});
										else
											return eachTest.test.map((tst, index) => {
												return (
													<Test
														key={index}
														subject={tst.subject}
														topic={tst.topic}
														time={`Tomorrow ${tst.time}`}
														duration={tst.duration}
													/>
												);
											});
								})}
							</div>
						</div>
					) : (
						<h2>Loading</h2>
					)}
				</div>
			</div>
		</div>
	);
}

export default CrashCourse;
