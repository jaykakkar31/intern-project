import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "../batches.scss";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useHistory } from "react-router";

// /////////////SUBJECTS SECTION//////////

export const subjects = [
	{
		id: 1,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 2,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 3,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 4,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 5,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 6,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 7,
		course: "IIT Crash Course",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Physics",
		language: "English",
		batches: "10",
	},
	{
		id: 8,
		topic: "Fundamentals of electromagnetic induction",
		picture:
			"https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
		subject: "Chemistry",
		time: "21 May",
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

const Subjects = ({student}) => {
  const history = useHistory();
  const [seeMore, setSeeMore] = useState(false);
  const Subject_grid = ({ course }) => {
    const [bookmark, setBookmark] = useState(false);
    return (
			<Grid
				item
				className="ongoingClass1"
				lg={3}
				onClick={() =>
					history.push(student._id ? "/iitjee" : "/students/login")
				}
			>
				<div className="upper">
					<div className="subject">
						<img src={course.picture} />
						<a onClick={() => setBookmark(!bookmark)}>
							{bookmark ? (
								<BookmarkIcon size={28} />
							) : (
								<BookmarkBorderIcon size={28} />
							)}
						</a>
					</div>
					<div className="intro">
						<h2 className="course_name">{course.course}</h2>
						<span className="language">{course.language}</span>
					</div>
					<h4 className="topic">{course.topic}</h4>
					<div className="subject-info">
						<p>{course.subject}</p>
						<p>{course.batches} Batches</p>
					</div>
				</div>
				<div className="button-container">
					<button
						onClick={() =>
							history.push(student?._id ? "/iitjee" : "/students/login")
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
            {subjects.map((course) => (
              <Subject_grid course={course} />
            ))}
          </>
        ) : (
          <>
            {subjects.slice(0, 6).map((course) => (
              <Subject_grid course={course} />
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

export default Subjects;
