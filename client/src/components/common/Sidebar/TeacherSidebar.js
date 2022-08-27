import React, { useEffect, useState } from "react";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import HomeIcon from "@material-ui/icons/Home";
import TocIcon from "@material-ui/icons/Toc";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import "./TeacherSidebar.css";
import { NavLink } from "react-router-dom";

function TeacherSidebar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768 ) setHide(true);
  }, []);
  return (
    <>
      {!hide ? (
        <div className="educator-sidebar t-side" style={{minWidth: "18%" }}>
          <div class="educator-link t-link">
            <div className="educator-icon">
              <ClearAllIcon
                style={{ fontSize: "40px" }}
                cursor="pointer"
                onClick={() => setHide((prev) => !prev)}
              />
            </div>
            <h3>
              <NavLink
                exact
                to="/educator"
                activeClassName="active2"
                className="teach-bar"
              >
                <HomeIcon /> Home
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/myvideos"
                activeClassName="active2"
                className="teach-bar"
              >
                <PersonalVideoIcon /> Your Videos
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/liveclass"
                activeClassName="active2"
                className="teach-bar"
              >
                <LiveTvIcon /> Live classes
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/schedule"
                activeClassName="active2"
                className="teach-bar"
              >
                <EventOutlinedIcon /> Schedule
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/chat"
                activeClassName="active2"
                className="teach-bar"
              >
                <QuestionAnswerOutlinedIcon /> Chat
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/settings"
                activeClassName="active2"
                className="teach-bar"
              >
                <SettingsOutlinedIcon /> Settings
              </NavLink>
            </h3>
          </div>
        </div>
      ) : (
        <div className="educator-sidebar">
          <div class="educator-link">
            <div className="educator-icon" style={{ textAlign: "center" }}>
              <TocIcon
                cursor="pointer"
                onClick={() => setHide((prev) => !prev)}
              />
            </div>
            <h3>
              <NavLink
                exact
                to="/educator"
                activeClassName="active2"
                className="teach-bar"
              >
                <HomeIcon />
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/myvideos"
                activeClassName="active2"
                className="teach-bar"
              >
                <PersonalVideoIcon />
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/liveclass"
                activeClassName="active2"
                className="teach-bar"
              >
                <LiveTvIcon />
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/schedule"
                activeClassName="active2"
                className="teach-bar"
              >
                <EventOutlinedIcon />
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/chat"
                activeClassName="active2"
                className="teach-bar"
              >
                <QuestionAnswerOutlinedIcon />
              </NavLink>
            </h3>
            <h3>
              <NavLink
                to="/educator/settings"
                activeClassName="active2"
                className="teach-bar"
              >
                <SettingsOutlinedIcon />
              </NavLink>
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default TeacherSidebar;
