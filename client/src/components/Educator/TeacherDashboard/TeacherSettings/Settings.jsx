import React, { useState } from "react";
import TeacherSidebar from "../../../common/Sidebar/TeacherSidebar";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import sunset from "./sunset.jpg";
import "./settings.css";
const Settings = ({ educator }) => {
  const id = educator?._id;
  console.log(id);
  return (
		<div className="educator-settings">
			<TeacherSidebar educator={educator} />
			<div className="sub-educator-settings">
				<div className="settings-head">
					<h2>Settings</h2>
				</div>
				<div className="edu-container">
					<div className="set-left-side">
						<div className="div-pos">
							<div className="settings">
								<AccountCircleOutlinedIcon className="accounts" />
								<span className="settings-name accounts"> Account</span>
							</div>
							<div className="settings">
								<NotificationsNoneOutlinedIcon />
								<span className="settings-name"> Notification</span>
							</div>
							<div className="settings">
								<CreditCardOutlinedIcon />
								<span className="settings-name"> Billing & payments </span>
							</div>
							<div className="settings">
								<SecurityOutlinedIcon />
								<span className="settings-name">Privacy & security</span>
							</div>
							<div className="settings">
								<SettingsOutlinedIcon />
								<span className="settings-name">Advanced Settings</span>
							</div>
						</div>
					</div>
					<div className="right-side">
						<div className="box-settings">
							<div class="edit-box">
								<div className="box-heading">
									<h3>Account</h3>
								</div>
								<button type="button" class="btn btn-primary butns">
									Edit
								</button>
							</div>

							<div className="setting-info">
								<img src={sunset} alt="sunset" />
								<div className="info-teach">
									<h2>Iris Joe</h2>
									<span>Physics Educator</span>
								</div>
							</div>
							<form>
								<div className="detail-left-right">
									<div className="left-details">
										<div className="details">
											<input type="text" placeholder="First Name" />
										</div>
										<div className="details">
											<input type="text" placeholder="Email" />
										</div>
										<div className="details">
											<input type="text" placeholder="Country" />
										</div>
										<div className="details">
											<input type="text" placeholder="City" />
										</div>
									</div>
									<div className="right-details">
										<div className="details">
											<input type="text" placeholder="Last Name" />
										</div>
										<div className="details">
											<input type="text" placeholder="Contact Number" />
										</div>
										<div className="details">
											<input type="text" placeholder="State" />
										</div>
										<div className="details">
											<input type="text" placeholder="Pincode" />
										</div>
									</div>
								</div>
								<div className="details">
									<input type="text" placeholder="Address" />
								</div>
								<div className="details">
									<input type="text" placeholder="Enter current password" />
								</div>
								<div className="details">
									<input type="text" placeholder="Enter new password" />
								</div>
								<div className="details">
									<input type="text" placeholder="Confirm password" />
								</div>
								<button type="button" class="btn btn-primary butns">
									Save
								</button>
							</form>
						</div>

						<div className="box-settings notification">
							<div className="box-heading">
								<h3>Notification</h3>
							</div>
							<div className="toggle">
								<div class="form-check form-switch ">
									<label class="form-check-label" for="flexSwitchCheckDefault">
										Email Notification
									</label>
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckDefault"
									/>
								</div>
							</div>
							<div className="toggle">
								<div class="form-check form-switch">
									<label class="form-check-label" for="flexSwitchCheckSms">
										SMS Notification
									</label>
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckSms"
									/>
								</div>
							</div>
							<div className="toggle">
								<div class="form-check form-switch">
									<label class="form-check-label" for="flexSwitchCheckChat">
										Chat Notification
									</label>
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckChat"
									/>
								</div>
							</div>
						</div>

						<div className="box-settings payment">
							<div className="box-heading">
								<h3>Billing & Payment</h3>
							</div>
							<div className="bank-detail-head">
								<h4>Your Bank Details</h4>
							</div>
							<form>
								<div className="detail-left-right">
									<div className="left-details">
										<div className="details">
											<input type="text" placeholder="Account Number" />
										</div>
										<div className="details">
											<input type="text" placeholder="IFSC code" />
										</div>
									</div>
									<div className="right-details">
										<div className="details">
											<input type="text" placeholder="Bank Name" />
										</div>
										<div className="details">
											<input type="text" placeholder="Account Holder Number" />
										</div>
									</div>
								</div>
								<div className="upi-detail-head">
									<h4>Your UPI Detail</h4>
								</div>
								<div className="details">
									<input type="text" placeholder="Upi ID" />
								</div>

								<button type="button" class="btn btn-primary butns">
									Save
								</button>
							</form>
						</div>

						<div className="box-settings notification">
							<div className="box-heading">
								<h3>Privacy & Security</h3>
							</div>
							<div className="toggle">
								<div class="form-check form-switch">
									<label class="form-check-label" for="flexSwitchCheckLocation">
										Location
									</label>
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheckLocation"
									/>
								</div>
							</div>
							<div className="toggle">
								<div class="form-check form-switch">
									<label class="form-check-label" for="flexSwitchCheck">
										Two Step Verification
									</label>
									<input
										class="form-check-input"
										type="checkbox"
										id="flexSwitchCheck"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Settings;
