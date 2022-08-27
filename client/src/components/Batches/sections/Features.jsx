import { Grid } from "@material-ui/core";
import React from "react";


// /////////////FEATURES SECTION/////////////////////////
export const features = [
	{
		id: 1,
		picture: "/images/learn.png",
		name: "Daily Live Classes",
		info: "Feels like you are in the classroom.    Learn and chat with expert educators.",
	},
	{
		id: 2,
		picture: '/images/revision.png',
		name: "Student monitoring",
		info: "Recordings, revise",
	},
	{
		id: 3,
		picture: '/images/ai-int.png',
		name: "AI Enabled",
		info: "India's first AI Enabled system. See your growth with AI Visualization",
	},
	{
		id: 4,
		picture: '/images/quiz.png',
		name: "Quiz & tests",
		info: "Topic wise quiz every week. Give test to see where you stand.",
	},
];
const Features = () => {
	return (
		<div className="feature_section">
			<h1>What you'll get from here</h1>
			<Grid container alignItems="flex-start" className="feature_box">
				{features.map((feature) => (
					<Grid item lg={4} className="feature" style={{width:'100%'}}>
						
						<img
							src={feature.picture}
						/>
						<div className="feature_info">
							<h3>{feature.name}</h3>
							<p>{feature.info}</p>
						</div>
					</Grid>
				))}
			</Grid>
		
		</div>
	);
};
export default Features;
