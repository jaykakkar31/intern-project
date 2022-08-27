import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IOSSwitch from "../../common/toggleSwitch";

import { stupdateNotification } from "../../../services/api";

const Notifications = ({ student }) => {
  // notifcaitons holds notification object obtained from student details
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(student.notifications);
  }, [student]);
  // whenever a notification toggle switch is tapped, this function send a request to backed to update notification settings.
  const handleChange = async (id, e) => {
    const new_notifications = notifications;
    console.log(e);
    new_notifications[id - 1].value[`${e.target.name}`] = e.target.checked;
    const { data } = await stupdateNotification(student._id, {notifications : new_notifications})

    //http.post(
     // `/students/notifications/${student._id}`,
      //{ notifications: new_notifications }
    //);
    setNotifications(data.notifications);
  };
  return (
    <div>
      <h2 className="notification-heading">Notifications</h2>
      {notifications.map((notification) => (
        <div className="container notifications" key={notification.id}>
          <h3>{notification.name}</h3>
          {/* email notificaitons */}
          <div className="d-flex w-100 justify-content-between noti-row">
            <h2>Email</h2>
            <FormControlLabel
              control={
                <IOSSwitch
                   checked={notification.value.email}
                   onChange={(e) => handleChange(notification.id, e)}
                  name="email"
                />
              }
            />
          </div>
          {/* mobile notifcaitons */}
          <div className="d-flex w-100 justify-content-between noti-row">
            <h2>Mobile</h2>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={notification.value.mobile}
                  onChange={(e) => handleChange(notification.id, e)}
                  name="mobile"
                />
              }
            />
          </div>
          {/* push notifcaitons */}
          <div className="d-flex w-100 justify-content-between noti-row">
            <h2>Push</h2>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={notification.value.push}
                  onChange={(e) => handleChange(notification.id, e)}
                  name="push"
                />
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
