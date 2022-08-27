import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./LiveClass.css";
import { fetchId } from "../../../services/api";
const shortid = require("shortid");

function LiveClass({ name, subject, time, topic, img, start, student,id }) {
	const history = useHistory();
	// const authoriseClass = () => {
	//     if(student?.subscription.length > 0)
	//       history.push('/videolecture')
	//     else
	//       history.push('/iitjee/buycourse');
	const [disable, setDisable] = useState(true);
	console.log(id);

	// useEffect(() => {
	// 	fetchId().then((roomID) => {
	//         console.log("FETCHID CALLED"+roomID)

	// 		// console.log();
	// 		// console.log(roomID.data.length);
	// 		if (roomID.data.length === 0 && student._id) {
	// 			setDisable(true);

	// 			// setJoinDisable(true);
	// 		}
	// 		else if(!student._id)
	// 		  setDisable(false)
	// 		else {
	// 			console.log(roomID);
	// 			setDisable(false);
	// 			setId(roomID.data[0]);

	// 		}
	// 	});
	// }, []);

	return (
		<div
			className="live-class"
			onClick={() => {
				history.push(
					student._id ? `/educator/liveclass/broadcast/${id}` : "/videolecture"
				);
			}}
		>
			<div className="class-def live-def">
				<div>
					<img src={img} alt />
				</div>
				<div className="right-def right-live">
					<h1>{name}</h1>
					<h3>{subject}</h3>
					<p>{time}</p>
				</div>
			</div>
			<p>{topic}</p>
			<p>{start}</p>
			<div className="join-bt" id="live-bt">
				<button
					onClick={() => {
						history.push(
							student._id
								? `/educator/liveclass/broadcast/${id}`
								: "/videolecture"
						);
					}}
					className="btn btn-primary"
					disabled={disable}
				>
					Join Class
				</button>
			</div>
		</div>
	);
}

export default LiveClass;
