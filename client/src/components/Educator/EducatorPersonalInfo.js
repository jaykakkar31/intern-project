import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { updatePersonal } from "../../actions/setting";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { sendEducatorsPersonalInfo } from "../../services/api";
import { Input } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import AddIcon from "@material-ui/icons/Add";
import "./EducatorPersonalInfo.css";
const Educatorinfo = ({ educator }) => {
	const history = useHistory();
	// let fullName = educator.name.split(' ');
	const [fname, setFname] = useState(educator.personalInfo.name.split(" ")[0]);
	const [lname, setLname] = useState(
		educator.name.split(" ")[
			educator.personalInfo.name.split(" ").length - 1
		] === fname
			? ""
			: educator.personalInfo.name.split(" ")[
					educator.personalInfo.name.split(" ").length - 1
			  ]
	);

	const [info, setInfo] = useState({
		fullname: "",
		email: "",
		mobile: "",
		country: "",
		state: "",
		district: "",
		pincode: "",
		currentAdd: "",
		permanentAdd: "",
		linkedin: "",
		youtube: "",
		twitter: "",
		website: "",
		school: "",
		schoolStart: "",
		schoolEnd: "",
		university: "",
		universityStart: "",
		universityEnd: "",
		experienceOrg: "",
		orgStart: "",
		orgEnd: "",
		resume: "",
		video: "",
	});
	useEffect(() => {
		setInfo(educator.personalInfo);
	}, [educator]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setInfo({ ...info, ["fullname"]: `${fname} ${lname}` });
		const id = educator._id;
		console.log(educator);
		console.log(id);

		try {
			if (info.mobile !== educator.mobile) {
				toast.error("Mobile number should be same as the registered number");
			} else if (info.email !== educator.email) {
				toast.error("Email should be same as the registered email");
			} else {
				try {
					await sendEducatorsPersonalInfo(info, id).then(
						console.log("Info Sent!")
					);
					console.log(educator);
				} catch (error) {
					console.log(error);
				}
				if (educator.personalInfo.verified === "true") {
					history.push("/verified");
					//   window.location = "/educator";
				}
				if (educator.personalInfo.verified === "false") {
					history.push("/failed");
				}

				if (educator.personalInfo.verified === null) {
					history.push("/pending");
				}
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	return (
		<div className="edu-personal-info">
			<ToastContainer />
			<div className="details-container">
				<form onSubmit={handleSubmit}>
					<div className="details-container-personal-info">
						<h3>Personal Info</h3>
						<div className="flex-div-left-right">
							<div className="flex-div-left">
								<input
									className="e-p-input"
									placeholder="First Name*"
									name="firstname"
									value={fname}
									onChange={(e) => setFname(e.target.value)}
								/>
								<input
									className="e-p-input"
									placeholder="Email id*"
									name="email"
									value={info?.email}
									onChange={handleChange}
								/>
								<div className="small-left-right">
									<div className="small-left">
										{/* <select
                        class="selectpicker countrypicker"
                        data-flag="true"
                      ></select> */}

										<input
											className="e-p-input"
											placeholder="Country"
											name="country"
											value={info?.country}
											onChange={handleChange}
										/>
										<input
											className="e-p-input"
											id="city"
											placeholder="City"
											name="district"
											value={info?.district}
											onChange={handleChange}
										/>
									</div>
									<div className="small-right">
										<input
											className="e-p-input"
											name="state"
											placeholder="State"
											value={info?.state}
											onChange={handleChange}
										/>
										<input
											className="e-p-input"
											name="pincode"
											type="number"
											placeholder="Pincode"
											value={info?.pincode}
											onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="flex-div-right">
								<input
									className="e-p-input"
									placeholder="Last Name*"
									name="lastname"
									value={lname}
									onChange={(e) => setLname(e.target.value)}
								/>
								<input
									className="e-p-input"
									placeholder="Mobile no.*"
									type="tel"
									name="mobile"
									value={info?.mobile}
									onChange={handleChange}
								/>
							</div>
						</div>
						<input
							className="e-p-input"
							placeholder="Your current address*"
							name="currentAdd"
							value={info?.currentAdd}
							onChange={handleChange}
						/>
						<input
							className="e-p-input"
							placeholder="Your parmanent address*"
							name="permanentAdd"
							value={info?.permanentAdd}
							onChange={handleChange}
						/>

						<div className="flex-div-left-right">
							<div className="flex-div-left">
								<div className="social-container">
									<img
										className="social-icon"
										alt=""
										src="/images/linkedIn.png"
									/>
									<input
										className="e-p-input"
										placeholder="Your LinkedIn profile*"
										name="linkedin"
										value={info?.linkedin}
										onChange={handleChange}
									/>
								</div>
								<div className="social-container">
									<img
										className="social-icon"
										alt=""
										src="/images/twitter.png"
									/>
									<input
										className="e-p-input"
										placeholder="Your Twitter profile*"
										name="twitter"
										value={info?.twitter}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="flex-div-right">
								<div className="social-container">
									<img
										className="social-icon"
										alt=""
										src="/images/youtube.png"
									/>
									<input
										className="e-p-input"
										placeholder="Your youtube channel*"
										name="youtube"
										value={info?.youtube}
										onChange={handleChange}
									/>
								</div>
								<div className="social-container">
									<img className="social-icon" alt="" src="/images/web.png" />
									<input
										className="e-p-input"
										placeholder="Your website*"
										name="website"
										value={info?.website}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="details-container-education">
						<div className="ed-container">
							<h3>Education</h3>
							<AddIcon />
						</div>
						<div className="flex-div-left-right-med-container">
							<div className="flex-div-left-med-container">
								<input
									className="e-p-input"
									placeholder="School name"
									name="school"
									value={info?.school}
									onChange={handleChange}
								/>
								<input
									className="e-p-input"
									placeholder="University name"
									name="university"
									value={info?.university}
									onChange={handleChange}
								/>
							</div>
							<div className="flex-div-right-med-container">
								<div className="flex-div-right-med-container-line">
									<select
										id="start-year"
										placeholder="Start year"
										name="schoolStart"
										value={info?.schoolStart}
										onChange={handleChange}
									>
										<option>Start year</option>
										<option value="2010">2010</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2022</option>
										<option value="2021">2023</option>{" "}
										<option value="2021">2024</option>{" "}
										<option value="2021">2025</option>{" "}
										<option value="2021">2026</option>{" "}
										<option value="2021">2027</option>{" "}
										<option value="2021">2028</option>{" "}
										<option value="2021">2029</option>
									</select>

									<select
										id="year"
										name="schoolEnd"
										value={info?.schoolEnd}
										onChange={handleChange}
									>
										<option>End year</option>
										<option value="2010">2010</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2022</option>
										<option value="2021">2023</option>{" "}
										<option value="2021">2024</option>{" "}
										<option value="2021">2025</option>{" "}
										<option value="2021">2026</option>{" "}
										<option value="2021">2027</option>{" "}
										<option value="2021">2028</option>{" "}
										<option value="2021">2029</option>
									</select>
								</div>
								<div className="flex-div-right-med-container-line">
									<select
										id="start-year"
										placeholder="Start year"
										name="universityStart"
										value={info?.universityStart}
										onChange={handleChange}
									>
										<option>Start year</option>
										<option value="2010">2010</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2022</option>
										<option value="2021">2023</option>{" "}
										<option value="2021">2024</option>{" "}
										<option value="2021">2025</option>{" "}
										<option value="2021">2026</option>{" "}
										<option value="2021">2027</option>{" "}
										<option value="2021">2028</option>{" "}
										<option value="2021">2029</option>
									</select>

									<select
										id="year"
										name="universityEnd"
										value={info?.universityEnd}
										onChange={handleChange}
									>
										<option>End year</option>
										<option value="2010">2010</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2022</option>
										<option value="2021">2023</option>{" "}
										<option value="2021">2024</option>{" "}
										<option value="2021">2025</option>{" "}
										<option value="2021">2026</option>{" "}
										<option value="2021">2027</option>{" "}
										<option value="2021">2028</option>{" "}
										<option value="2021">2029</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="details-container-experience">
						<div className="ed-container">
							<h3>Experience</h3>
							<AddIcon />
						</div>
						<div className="flex-div-left-right-med-container">
							{" "}
							<div className="flex-div-left-med-container">
								<input
									className="e-p-input"
									placeholder="Organisation name"
									name="experienceOrg"
									value={info?.experienceOrg}
									onChange={handleChange}
								/>
							</div>
							<div className="flex-div-right-med-container">
								<div className="flex-div-right-med-container-line">
									<select
										id="start-year"
										placeholder="Start year"
										name="orgStart"
										value={info?.orgStart}
										onChange={handleChange}
									>
										<option>Start year</option>
										<option value="2010">2010</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2022</option>
										<option value="2021">2023</option>{" "}
										<option value="2021">2024</option>{" "}
										<option value="2021">2025</option>{" "}
										<option value="2021">2026</option>{" "}
										<option value="2021">2027</option>{" "}
										<option value="2021">2028</option>{" "}
										<option value="2021">2029</option>
									</select>

									<select
										id="year"
										name="orgEnd"
										value={info?.orgEnd}
										onChange={handleChange}
									>
										<option>End year</option>
										<option value="2010">2010</option>
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2022</option>
										<option value="2021">2023</option>{" "}
										<option value="2021">2024</option>{" "}
										<option value="2021">2025</option>{" "}
										<option value="2021">2026</option>{" "}
										<option value="2021">2027</option>{" "}
										<option value="2021">2028</option>{" "}
										<option value="2021">2029</option>
									</select>
								</div>
							</div>
						</div>
					</div>

					<div className="details-container-resume">
						<h3>Upload Resume</h3>
						<div className="resume-container">
							<img src="/upload.png" alt="" />
							<p>Drag & Drop to upload</p>
							<p className="small-p">_______Or select file________</p>
							<input
								className="e-p-input"
								type="file"
								class="custom-file-input
                  className='e-p-input'"
								name="resume"
								value={info?.resume}
								type="file"
								onChange={handleChange}
							/>
						</div>
					</div>

					<div className="details-container-video">
						<h3>Upload video</h3>
						<div className="vid-upload-container">
							<div className="vid-upload-container-left">
								<VideoCallIcon />
								{/* <button type="button" class="btn btn-primary"> */}
								<input
									className="e-p-input"
									type="file"
									class="custom-file-input
                    className='e-p-input'"
									name="video"
									value={info?.video}
									type="file"
									onChange={handleChange}
								/>
								{/* </button> */}
							</div>
							<div className="vid-upload-container-right">
								<RecordVoiceOverIcon />
								<button type="button" class="ed-btn btn btn-primary">
									Record audio
								</button>
							</div>
						</div>
						<p>Acceptable format : 3gp, mp4</p>
						<p>Max file size 100mb</p>
					</div>

					<div className="details-container-button">
						<button type="button" class="btn ed-btn btn-outline cancel">
							Cancel
						</button>
						<button type="submit" class="btn ed-btn btn-primary">
							Submit
						</button>
					</div>

					{/* <Input
            className='e-p-input' name="name" value={info?.name} placeholder=' First name' onChange={handleChange} /> */}
				</form>
			</div>
		</div>
	);
};

export default Educatorinfo;
