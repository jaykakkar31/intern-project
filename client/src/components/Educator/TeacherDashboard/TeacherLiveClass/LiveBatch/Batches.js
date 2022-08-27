import React, { useState, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import FileBase from "react-file-base64";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import FileBase from "react-file-base64";
import "./batch.css";

import { createBatch } from "../../../../../actions/batch";
import TeacherSidebar from "../../../../common/Sidebar/TeacherSidebar";
import { Link } from "react-router-dom";

const BatchForm = ({ educator }) => {
	const [batchData, setBatchData] = useState({
		course: "",
		desc: "",
		schedule: "",
		batch: "",
		educator: "",
		content: "",
		time: "",
		thumbnail: "",
	});
	// const batch = useSelector((state) =>
	//   currentId
	//     ? state.batches.find((batch) => batch._id === currentId)
	//     : null
	// );
	const dispatch = useDispatch();
	// const educator = JSON.parse(localStorage.getItem("profile"));
	// useEffect(() => {
	//   if (batch) setBatchData(batch);
	// }, [batch]);

	const clear = () => {
		setBatchData({
			course: "",
			desc: "",
			schedule: "",
			batch: "",
			educator: "",
			content: "",
			time: "",
			thumbnail: "",
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		// if (currentId === 0) {
		try {
			if (batchData.educator !== educator.name) {
				toast.error(
					"Educator name should be same as registered name with the account"
				);
			} else if (
				!batchData.course ||
				!batchData.batch ||
				!batchData.desc ||
				!batchData.schedule ||
				!batchData.content ||
				!batchData.educator ||
				!batchData.time ||
				!batchData.thumbnail
			) {
				toast.error("Every field is required");
			} else {
				dispatch(
					createBatch({
						...batchData,
						creator: educator._id,
					})
				);
				clear();
			}
		} catch (error) {
			console.log(error);
			toast.error(error);
		}

		// } else {
		//   dispatch(
		//     updatebatch(currentId, { ...batchData, name: educator?.result?.name })
		//   );
		//   clear();
		// }
	};

	// if (!educator?.result?.name) {
	//   return <h1>Please Sign In to create your account</h1>;
	// }
	const useStyles = makeStyles((theme) => ({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				width: "55ch",
			},
		},
	}));

	const classes = useStyles();

	return (
		<div className="educator-batch">
			<TeacherSidebar />
			<div className="batchPage">
				<ToastContainer />

				<h4>Live batches</h4>
				<p>Create Batch</p>
				<div className="batchArea">
					<form onSubmit={handleSubmit}>
						<TextField
							id="standard-basic"
							name="course"
							value={batchData.course}
							onChange={(e) =>
								setBatchData({ ...batchData, course: e.target.value })
							}
							label="Course Name"
						/>
						<TextField
							id="standard-basic"
							label="Batch Name"
							name="batch"
							value={batchData.batch}
							onChange={(e) =>
								setBatchData({ ...batchData, batch: e.target.value })
							}
						/>
						<TextField
							id="standard-basic"
							label="Description"
							name="desc"
							value={batchData.desc}
							onChange={(e) =>
								setBatchData({ ...batchData, desc: e.target.value })
							}
						/>
						<div className="single-line">
							<TextField
								id="standard-basic"
								label="Schedule"
								name="schedule"
								className="single"
								value={batchData.schedule}
								onChange={(e) =>
									setBatchData({ ...batchData, schedule: e.target.value })
								}
							/>
							<TextField
								id="standard-basic"
								label="Course Content"
								className="single"
								name="content"
								value={batchData.content}
								onChange={(e) =>
									setBatchData({ ...batchData, content: e.target.value })
								}
							/>
						</div>
						<div className="single-line">
							<TextField
								className="single"
								id="standard-basic"
								label="Educator Name"
								name="educator"
								value={batchData.educator}
								onChange={(e) =>
									setBatchData({ ...batchData, educator: e.target.value })
								}
							/>
							<TextField
								className="single"
								id="standard-basic"
								name="time"
								value={batchData.time}
								onChange={(e) =>
									setBatchData({ ...batchData, time: e.target.value })
								}
								label="Date & Time"
							/>
						</div>
						<label className="thumbnail-label">Thumbnail</label>

						<FileBase
							name="thumbnail"
							type="file"
							value={batchData.thumbnail}
							onDone={({ base64 }) =>
								setBatchData({ ...batchData, thumbnail: base64 })
							}
						/>
						<div className="btns">
							<button className="btn btn-sm cancel-btn" onClick={clear}>
								Cancel
							</button>

							
								<button
									className="btn btn-primary btn-sm create-btn"
									type="submit"
								>
									Create batch
								</button>
								<br />
						</div>
						<Link to="/educator/liveclass/broadcast">Create Live Class</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BatchForm;
