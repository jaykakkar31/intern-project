import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IOSSwitch from "../../../common/toggleSwitch";
import { updateNotifications } from "../../../../services/api";
import Settings from "./Settings";
import "./settings.css";

const Notifications = ({ educator }) => {
  const [notifications, setNotifications] = useState({
    email: Boolean,
    sms: Boolean,
    chat: Boolean,
  });
  useEffect(() => {
    setNotifications(educator.notifications);
  }, [educator]);

  const handleChange = (e) => {
    setNotifications({ ...notifications, [e.target.name]: e.target.checked });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = educator._id;
    try {
      console.log(id);
      await updateNotifications(notifications, id);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="educator-account">
      <div className="common">
        <Settings educator={educator} />
      </div>
      <div className="account">
        <h2 className="notification-heading">Notifications</h2>
        <form onSubmit={handleSubmit}>
          <div className="container notifications">
            <div className="d-flex w-100 justify-content-between noti-row">
              <h2>Email</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={notifications?.email}
                    onChange={handleChange}
                    name="email"
                  />
                }
              />
            </div>
            <div className="d-flex w-100 justify-content-between noti-row">
              <h2>SMS</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={notifications?.sms}
                    onChange={handleChange}
                    name="sms"
                  />
                }
              />
            </div>
            <div className="d-flex w-100 justify-content-between noti-row">
              <h2>Chat</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={notifications?.chat}
                    onChange={handleChange}
                    name="chat"
                  />
                }
              />
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notifications;
