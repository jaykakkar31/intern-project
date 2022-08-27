import React, { useEffect, useState } from 'react'
import './UserForm.css'
import { ToastContainer, toast } from "react-toastify";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import AddIcon from "@material-ui/icons/Add";
import { FormControlLabel, RadioGroup, Radio, TextField, Button, useRadioGroup } from '@material-ui/core'
import AdminSidebar from './AdminSidebar';
import http from "../services/httpService";
import { useHistory } from 'react-router';
import { adminSentReport, educatorInfo, eduVerify, sendReport } from '../services/api';

const server_domain = "http://localhost:4000";

function UserForm() {
	const [user, setUser] = useState(null);
	const [preview, setPreview] = useState(false);
	const history = useHistory();
	const [edureport, setEduReport] = useState({
		educatorInfo : null,
		email : '',
		mobile : '',
		report : {
			personalInfo : {
				correct : '',
				reason : ''
			},
			socialmediaInfo : {
                correct : '',
                reason : '',
            },
            educationInfo : {
                correct : '',
                reason : '',
            },
            experienceInfo : {
                correct : '',
                reason : '',
            },
            resumeInfo : {
                correct : '',
                reason : '',
            },
            videoInfo : {
                correct : '',
                reason : '',
            }
		}
	})
    useEffect( async() => {
		const {data} = await educatorInfo(window.location.pathname.substr(32));
		try {
			setUser(data);
			setEduReport({...edureport, educatorInfo : data.personalInfo, email : data.email, mobile : data.mobile})
		
		} catch (error) {
			console.log(error);
		}
	},[])
	const handleSubmit = async (e) => {
		e.preventDefault();
		if(!preview)
		 setPreview(true);
		else{
			//console.log(edureport)
			const {data} = await sendReport(edureport);
			try {
				console.log(data);
			} catch (error) {
				console.log(error);
			}
			adminSentReport({sentReport:true},user?._id).then(res => console.log(res.data)).catch(err => console.log(err))
			if(edureport.report.personalInfo.correct ==='Yes'&&
			 edureport.report.socialmediaInfo.correct === 'Yes' &&
			 edureport.report.educationInfo.correct === 'Yes' &&
			 edureport.report.experienceInfo.correct === 'Yes' &&
			 edureport.report.resumeInfo.correct === 'Yes' &&
			 edureport.report.videoInfo.correct === 'Yes'
			 ){
				 eduVerify(user?._id).then(res => console.log(res.data)).catch(err => console.log(err))
			 }
			history.push('/educator/admin/adminhome/inbox');
		}
	}
    return (
        <div className='admin-form'>
            <AdminSidebar/>
       
        <div className="edu-personal-info">
			<ToastContainer />
			<div className="details-container" id = "ex-detail">
				{user&&(<form onSubmit={handleSubmit}>
					<div className="details-container-personal-info">
						<h3>Personal Information</h3>
						<div className="flex-div-left-right">
							<div className="flex-div-left">
								<input
									className="e-p-input"
									placeholder="First Name*"
									name="firstname"
									value={user.name.split(" ")[0]}
									disabled
									////onChange={(e) => setFname(e.target.value)}
								/>
								<input
									className="e-p-input"
									placeholder="Email id*"
									name="email"
									value={user?.email}
									disabled
									//onChange={handleChange}
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
											value={user.personalInfo.country}
											disabled
											//onChange={handleChange}
										/>
										<input
											className="e-p-input"
											id="city"
											placeholder="City"
											name="district"
											value={user.personalInfo.district}
											disabled
											//onChange={handleChange}
										/>
									</div>
									<div className="small-right">
										<input
											className="e-p-input"
											name="state"
											placeholder="State"
											value={user.personalInfo.state}
											disabled
											//onChange={handleChange}
										/>
										<input
											className="e-p-input"
											name="pincode"
											type="number"
											placeholder="Pincode"
											value={user.personalInfo.pincode}
											disabled
											//onChange={handleChange}
										/>
									</div>
								</div>
							</div>

							<div className="flex-div-right">
								<input
									className="e-p-input"
									placeholder="Last Name*"
									name="lastname"
									disabled
									value={user.name.split(" ")[
										user.name.split(" ").length - 1
									] === user.name.split(" ")[0]
										? ""
										: user.name.split(" ")[
												user.name.split(" ").length - 1
										  ]}
									//onChange={(e) => setLname(e.target.value)}
								/>
								<input
									className="e-p-input"
									placeholder="Mobile no.*"
									type="tel"
									name="mobile"
									value={user.mobile}
									disabled
									//onChange={handleChange}
								/>
							</div>
						</div>
						<input
							className="e-p-input"
							placeholder="Your current address*"
							name="currentAdd"
							value={user.personalInfo.currentAdd}
							disabled
							//onChange={handleChange}
						/>
						<input
							className="e-p-input"
							placeholder="Your permanent address*"
							name="permanentAdd"
							value={user.personalInfo.permanentAdd}
							disabled
							//onChange={handleChange}
						/>
                        <div className='approve-note'>
                            <div className='sub-a-n'>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="Yes"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="Yes"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, personalInfo : {
									...edureport.report.personalInfo , correct : e.target.value
								} } })}
								/>
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="No"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="No"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, personalInfo : {
									...edureport.report.personalInfo , correct : e.target.value
								} } })}
								/>
							</RadioGroup>
                            </div>
							<div>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder='Add Note'
								variant='outlined'
								fullWidth='true'
								disabled={preview?true:false}
								onChange = {(e) => setEduReport({...edureport, report:{...edureport.report, personalInfo : {
									...edureport.report.personalInfo , reason : e.target.value
								} } })}
								value = {edureport.report.personalInfo.reason}
								/>
							</div>
                        </div>
						<h4>Social Media Information</h4>
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
										value={user.personalInfo.linkedin}
										disabled
										//onChange={handleChange}
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
										value={user.personalInfo.twitter}
										disabled
										//onChange={handleChange}
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
										value={user.personalInfo.youtube}
										disabled
										//onChange={handleChange}
									/>
								</div>
								<div className="social-container">
									<img className="social-icon" alt="" src="/images/web.png" />
									<input
										className="e-p-input"
										placeholder="Your website*"
										name="website"
										value={user.personalInfo.website}
										disabled
										//onChange={handleChange}
									/>
								</div>
							</div>
						</div>
						<div className='approve-note'>
                            <div className='sub-a-n'>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="Yes"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="Yes"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, socialmediaInfo : {
									...edureport.report.socialmediaInfo , correct : e.target.value
								} } })}
								/>
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="No"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="No"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, socialmediaInfo : {
									...edureport.report.socialmediaInfo , correct : e.target.value
								} } })}
								/>
							</RadioGroup>
                            </div>
							<div>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder='Add Note'
								variant='outlined'
								fullWidth='true'
								disabled={preview?true:false}
								onChange = {(e) => setEduReport({...edureport, report:{...edureport.report, socialmediaInfo : {
									...edureport.report.socialmediaInfo , reason : e.target.value
								} } })}
								value = {edureport.report.socialmediaInfo.reason}
								/>
							</div>
                        </div>
					</div>

					<div className="details-container-education">
						<div className="ed-container">
							<h3>Education</h3>
							
						</div>
						<div className="flex-div-left-right-med-container">
							<div className="flex-div-left-med-container">
								<input
									className="e-p-input"
									placeholder="School name"
									name="school"
									value={user.personalInfo.school}
									disabled
									//onChange={handleChange}
								/>
								<input
									className="e-p-input"
									placeholder="University name"
									name="university"
									value={user.personalInfo.university}
									disabled
									//onChange={handleChange}
								/>
							</div>
							<div className="flex-div-right-med-container">
								<div className="flex-div-right-med-container-line">
									<select
										id="start-year"
										placeholder="Start year"
										name="schoolStart"
										value={user.personalInfo.schoolStart}
										//onChange={handleChange}
                                        disabled
									>
										<option>{user.personalInfo.schoolStart}</option>
									</select>

									<select
										id="year"
										name="schoolEnd"
										value={user.personalInfo.schoolEnd}
										disabled
										//onChange={handleChange}
									>
										<option>{user.personalInfo.schoolEnd}</option>
									</select>
								</div>
								<div className="flex-div-right-med-container-line">
									<select
										id="start-year"
										placeholder="Start year"
										name="universityStart"
										value={user.personalInfo.universityStart}
										disabled
										//onChange={handleChange}
									>
										<option>{user.personalInfo.universityStart}</option>
									</select>

									<select
										id="year"
										name="universityEnd"
										value={user.personalInfo.universityEnd}
										disabled
										//onChange={handleChange}
									>
										<option>{user.personalInfo.universityEnd}</option>
									</select>
								</div>
							</div>
						</div>
						<div className='approve-note'>
                            <div className='sub-a-n'>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="Yes"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="Yes"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, educationInfo : {
									...edureport.report.educationInfo , correct : e.target.value
								} } })}
								/>
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="No"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="No"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, educationInfo : {
									...edureport.report.educationInfo , correct : e.target.value
								} } })}
								/>
							</RadioGroup>
                            </div>
							<div>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder='Add Note'
								variant='outlined'
								fullWidth='true'
								disabled={preview?true:false}
								onChange = {(e) => setEduReport({...edureport, report:{...edureport.report, educationInfo : {
									...edureport.report.educationInfo , reason : e.target.value
								} } })}
								value = {edureport.report.educationInfo.reason}
								/>
							</div>
                        </div>
					</div>

					<div className="details-container-experience">
						<div className="ed-container">
							<h3>Experience</h3>
							
						</div>
						<div className="flex-div-left-right-med-container">
							{" "}
							<div className="flex-div-left-med-container">
								<input
									className="e-p-input"
									placeholder="Organisation name"
									name="experienceOrg"
									value={user.personalInfo.experienceOrg}
									disabled
									//onChange={handleChange}
								/>
							</div>
							<div className="flex-div-right-med-container">
								<div className="flex-div-right-med-container-line">
									<select
										id="start-year"
										placeholder="Start year"
										name="orgStart"
										value={user.personalInfo.orgStart}
										disabled
										//onChange={handleChange}
									>
										<option>{user.personalInfo.orgStart}</option>
									</select>

									<select
										id="year"
										name="orgEnd"
										value={user.personalInfo.orgEnd}
										disabled
										//onChange={handleChange}
									>
										<option>{user.personalInfo.orgEnd}</option>
									</select>
								</div>
							</div>
						</div>
						<div className='approve-note'>
                            <div className='sub-a-n'>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="Yes"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="Yes"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, experienceInfo : {
									...edureport.report.experienceInfo , correct : e.target.value
								} } })}
								/>
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="No"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="No"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, experienceInfo : {
									...edureport.report.experienceInfo , correct : e.target.value
								} } })}
								/>
							</RadioGroup>
                            </div>
							<div>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder='Add Note'
								variant='outlined'
								fullWidth='true'
								disabled={preview?true:false}
								onChange = {(e) => setEduReport({...edureport, report:{...edureport.report, experienceInfo : {
									...edureport.report.experienceInfo , reason : e.target.value
								} } })}
								value = {edureport.report.experienceInfo.reason}
								/>
							</div>
                        </div>
					</div>

					<div className="details-container-resume">
						<h3>Upload Resume</h3>
						<div className="view-vid">
							<div className="icon-view-vid">
					  			<img src='/images/resume.png' alt/>
							</div>
					  			<div className='icon-right-11'>
								<Button color='primary' disableElevation  variant='contained'>View Resume</Button>
								</div>
							
						</div>
						<div className='approve-note'>
                            <div className='sub-a-n'>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="Yes"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="Yes"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, resumeInfo : {
									...edureport.report.resumeInfo , correct : e.target.value
								} } })}
								/>
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="No"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="No"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, resumeInfo : {
									...edureport.report.resumeInfo , correct : e.target.value
								} } })}
								/>
							</RadioGroup>
                            </div>
							<div>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder='Add Note'
								variant='outlined'
								fullWidth='true'
								disabled={preview?true:false}
								onChange = {(e) => setEduReport({...edureport, report:{...edureport.report, resumeInfo : {
									...edureport.report.resumeInfo , reason : e.target.value
								} } })}
								value = {edureport.report.resumeInfo.reason}
								/>
							</div>
                        </div>
					</div>

					<div className="details-container-video">
						<h3>Upload video</h3>
						<div className="view-vid">
							<div className="icon-view-vid">
					  			<img src='/images/video.png' alt/>
							</div>
					  			<div className='icon-right-11'>
								<Button color='primary' disableElevation variant='contained'>View Video</Button>
								</div>
							
						</div>
						<div className='approve-note'>
                            <div className='sub-a-n'>
							<RadioGroup row aria-label="position" name="position">
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="Yes"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="Yes"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, videoInfo : {
									...edureport.report.videoInfo , correct : e.target.value
								} } })}
								/>
								<FormControlLabel
								style={{color:'#5D5FEF'}}
								value="No"
								control={<Radio style={{color:'#5D5FEF'}} />}
								label="No"
								labelPlacement="top"
								disabled={preview?true:false}
								onClick={(e) => setEduReport({...edureport, report:{...edureport.report, videoInfo : {
									...edureport.report.videoInfo , correct : e.target.value
								} } })}
								/>
							</RadioGroup>
                            </div>
							<div>
							<TextField
								id="outlined-multiline-static"
								multiline
								rows={4}
								placeholder='Add Note'
								variant='outlined'
								fullWidth='true'
								disabled={preview?true:false}
								onChange = {(e) => setEduReport({...edureport, report:{...edureport.report, videoInfo : {
									...edureport.report.videoInfo , reason : e.target.value
								} } })}
								value = {edureport.report.videoInfo.reason}
								/>
							</div>
                        </div>
					</div>

					<div className="details-container-button">
						<button type="button" class="btn ed-btn btn-outline cancel" onClick={() => {
							if(preview)
							 	setPreview(false);
						}}>
							{preview?"Back":"Cancel"}
						</button>
						<button class="btn ed-btn btn-primary">
							{preview?"Send":"Generate"}
						</button>
					</div>

					{/* <Input
            className='e-p-input' name="name" value={info?.name} placeholder=' First name' //onChange={handleChange} /> */}
				</form>)}
			</div>
		</div>
        </div>
    )
}

export default UserForm
