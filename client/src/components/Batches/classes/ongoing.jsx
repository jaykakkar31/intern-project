import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import "../batches.scss";
import { useHistory } from "react-router";

// ////////ONGOING BATCHES DATA /////////////

export const ongoing = [
  {
    id: 1,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
  },
  {
    id: 2,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
  },
  {
    id: 3,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
  },
  {
    id: 4,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
  },
  {
    id: 5,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
  },
  {
    id: 6,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
  },
  {
    id: 7,
    topic: "Fundamentals of electromagnetic induction",
    picture:
      "https://assets-global.website-files.com/6060bea07a71c73512f838b3/6078b11fca46a318497ad999_shutterstock_290001398.jpeg",
    subject: "Chemistry",
    time: "21 May",
    language: "English",
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

const Ongoing = ({student}) => {
  const [seeMore, setSeeMore] = useState(false);
  const history = useHistory();
  const Ongoing_grid = ({ course }) => {
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
					<img src={course.picture} />
					<h4 className="topic">{course.topic}</h4>

					<div className="info">
						<p>{course.subject}</p>
						<p>{course.language}</p>
					</div>

					<p>Starts on: {course.time}</p>
				</div>
				<div className="button-container">
					<button
						onClick={() =>
							history.push(student?._id ? "/iitjee" : "/students/login")
						}
					>
						Join Class
					</button>
				</div>
			</Grid>
		);
  };

  return (
    <div>
      <Grid container alignItems="flex-start" className="ongoing_classes">
        {seeMore ? (
          <>
            {ongoing.map((course) => (
              <Ongoing_grid course={course} />
            ))}
          </>
        ) : (
          <>
            {ongoing.slice(0, 6).map((course) => (
              <Ongoing_grid course={course} />
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

export default Ongoing;
