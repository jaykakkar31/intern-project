import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "../batches.scss";
import { useHistory } from "react-router";
const shortId=require("shortid")
///////BEST BATCHES DATA /////////////

export const live = [
	{
		id: 1,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 2,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 3,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 4,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 5,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 6,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 7,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 8,
		instructor: "Robert",
		rating: "4.8/5",
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		language: "English",
	},
	{
		id: 9,
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		time: "21 May",
		language: "English",
	},
];

const Live = ({ student }) => {
    const id=shortId.generate()
	const [seeMore, setSeeMore] = useState(false);
	const history = useHistory();
	const Best_grid = ({ course }) => {
		return (
			<Grid
				item
				className="ongoingClass1"
				lg={3}
				onClick={() =>
					history.push(`/freelecture/${id}`)
				}
			>
				<div className="upper">
					<img src={course.picture} />
					<div className="intro">
						<span>{course.instructor}</span>
						<span className="rating">{course.rating}</span>
					</div>
					<h4 className="topic">{course.topic}</h4>

					<div className="info">
						<p>{course.subject}</p>
						<p>{course.language}</p>
					</div>
				</div>
				<div className="button-container">
					<button
						onClick={() =>
							history.push(`/freelecture/${id}`)
						}
					>
						Join Class
					</button>
				</div>{" "}
			</Grid>
		);
	};

	return (
		<div>
			<Grid container alignItems="flex-start" className="ongoing_classes">
				{seeMore ? (
					<>
						{live.map((course) => (
							<Best_grid course={course} id={id}/>
						))}
					</>
				) : (
					<>
						{live.slice(0, 6).map((course) => (
							<Best_grid course={course} id={id}/>
						))}
					</>
				)}
			</Grid>
			<a className="show_btn" onClick={() => setSeeMore(!seeMore)}>
				{seeMore ? "See less" : "See more"}
			</a>
		</div>
	);
};

export default Live;
