import React from "react";
import moment from "moment";
import { useState } from "react";
import "react-time-picker/dist/TimePicker.css";
import ClearIcon from "@material-ui/icons/Clear";
import "antd/dist/antd.css";
import { getEvent, saveEvent, updateEvent } from "../../../services/api";
import "react-datepicker/dist/react-datepicker.css";

import "./popup.css";

const Popup = ({
	task,
	setTask,
	setIsHidden,
	isHidden,
	timeId,
	setEventData,
	timeDefault,
	weekDayId,
	aLabel,
	setState,
}) => {
	const newMonth = [
		"00:00",
		"01:00",
		"02:00",
		"03:00",
		"04:00",
		"05:00",
		"06:00",
		"07:00",
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
		"23:00",
	];

	let endTimeId = timeId + 1;

	const [payload, setPayload] = useState({
		startAt: task ? task.startAt : newMonth[timeId],
		endAt: task
			? task.endAt
			: newMonth[endTimeId]
			? newMonth[endTimeId]
			: "23:59",
		title: task ? task.title : "",
		description: task ? task.description : "",
		timeId: timeId,
		dayId: task ? task.weekDayId : weekDayId,
		aLabel: task ? task.aLabel : aLabel,
		id: task ? task._id : "",
	});


	const [timeIdIndex, setTimeIdIndex] = useState(0);
	const handleChange = (e, timeString) => {
		console.log(newMonth.indexOf(payload.startAt));
		const { name, value } = e.target;

		console.log(name, value);
		setPayload((prev) => {
			if (name === "startAt") {
				setTimeIdIndex(newMonth.indexOf(value));
			}
			console.log(name, value, timeIdIndex);
			if (payload.startAt < payload.endAt) {
				console.log(payload.endAt);
			}
			return {
				...prev,
				[name]: value,
				dayId: weekDayId,
				aLabel: aLabel,
			};
		});
	};
	console.log(payload);

	return (
		<div className="Form" hidden={false}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<ClearIcon
					className="close"
					onClick={() => {
						setTask(null);

						setIsHidden(!isHidden);
					}}
				/>
				<fieldset>
					<div className="container fieldcont">
						{console.log(aLabel)}
						<span>{aLabel ? aLabel : moment().format("LL")}</span>
						<div className="row-date time-row">
							<div className="column-date">
								<label>Start Time</label>

								<input
									className="startTime"
									type="time"
									name="startAt"
									value={payload.startAt}
									onChange={handleChange}
								></input>
							</div>
							<div className="column-date">
								<label>End Time</label>
								<input
									className="startTime"
									type="time"
									name="endAt"
									value={payload.endAt}
									onChange={handleChange}
								></input>
							</div>
						</div>

						<div className="row-date title-row">
							<div className="column-date title-column">
								<label htmlFor="title">Title</label>
								<input
									type="text"
									placeholder="What are you up to?"
									id="title"
									name="title"
									value={payload.title}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="row-date title-row">
							<div className="column-date title-column">
								<label htmlFor="description">Description</label>
								<textarea
									placeholder="Where? How? Zoom? Skype"
									id="description"
									columns="50"
									name="description"
									value={payload.description}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="row-date btn-row">
							<div className="column-date">
								<button
									type="submit"
									class="btn btn-primary"
									onClick={(e) => {
										if (
											moment(payload.startAt, "h:mm").isBefore(
												moment(payload.endAt, "h:mm")
											)
										) {
											console.log("Correct. Start Time is below End Time");
											console.log(task);
											payload.timeId = newMonth.indexOf(payload.startAt);
											if (!task) {
												console.log("run");
												saveEvent(payload).then((response) => {
													console.log(response.data);
													if (response.data === "saved") {
														getEvent().then((response) => {
															setEventData(response.data);
														});
													}
												});
											}
											if (task) {
												updateEvent(payload).then((response) => {
													console.log(task);
													if (response.data === "updated") {
														getEvent().then((response) => {
															setEventData(response.data);
														});
													}
												});
											}
											setTask(null);
											setIsHidden(!isHidden);
										} else {
											alert("Error. Start Time is more than End Time");
										}
									}}
								>
									{task ? "Update" : "Create"}
								</button>

							
							</div>
					
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default Popup;
