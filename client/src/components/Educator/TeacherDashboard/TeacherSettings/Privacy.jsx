import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IOSSwitch from "../../../common/toggleSwitch";
import { updatePrivacy } from "../../../../services/api";
import Settings from "./Settings";
import "./settings.css";
const Privacy = ({ educator }) => {
  const [privacy, setPrivacy] = useState({
    location: Boolean,
    twoStepAuth: Boolean,
  });

  useEffect(() => {
    setPrivacy(educator.privacy);
  }, [educator]);
  // whenever a notification toggle switch is tapped, this function send a request to backed to update notification settings.
  // const handleChange = async (e) => {
  //   const new_privacy = privacy;
  //   console.log(e);
  //   new_privacy[`${e.target.name}`] = e.target.checked;
  //   const { data } = await http.put("/educator/privacy", {
  //     privacy: new_privacy,
  //   });
  //   setPrivacy(data.privacy);
  // };
  const handleChange = (e) => {
    setPrivacy({ ...privacy, [e.target.name]: e.target.checked });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = educator._id;
    try {
      await updatePrivacy(privacy, id);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="educator-account flex">
      <div className="common">
        <Settings educator={educator} />
      </div>

      <div className="account">
        {" "}
        <h2 className="notification-heading">Privacy & Security</h2>
        <form onSubmit={handleSubmit}>
          <div className="container notifications">
            <div className="d-flex w-100 justify-content-between noti-row">
              <h2>Location</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={privacy?.location}
                    onChange={handleChange}
                    name="location"
                  />
                }
              />
            </div>
            <div className="d-flex w-100 justify-content-between noti-row">
              <h2>Two Step Authentication</h2>
              <FormControlLabel
                control={
                  <IOSSwitch
                    checked={privacy?.twoStepAuth}
                    onChange={handleChange}
                    name="twoStepAuth"
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

export default Privacy;
