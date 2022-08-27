import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import TeacherSidebar from "../../../common/Sidebar/TeacherSidebar";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Trend from "react-trend";
import "./TeacherHome.css";
function TeacherHome({ educator }) {
  return (
    <div className="educator-home">
      <TeacherSidebar />
      <div className="home-main">
        <h1>Home</h1>
        <div>
          <div className="stats-view">
            <div className="main-stats">
              <div className="main-stats-head">
                <h3>Statistics</h3>
                <p>July</p>
              </div>
              <Button>Followers</Button>
              <Button>Views</Button>

              <div className="main-graph">
                <div className="left-graph-num">
                  <p>700</p>
                  <p>600</p>
                  <p>500</p>
                  <p>400</p>
                  <p>300</p>
                  <p>200</p>
                  <p>100</p>
                  <p style={{ textAlign: "right" }}>0</p>
                </div>
                <Trend
                  smooth
                  autoDraw
                  autoDrawDuration={3000}
                  autoDrawEasing="ease-out"
                  data={[300, 200, 500, 350, 403, 100, 200, 50, 120, 100, 222]}
                  gradient={["#83e979"]}
                  radius={100}
                  strokeWidth={4}
                  strokeLinecap={"butt"}
                  height={400}
                  width={700}
                />
              </div>
              <div className="stat-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
            <div className="stu-nroll">
              <div className="nroll">
                <div className="head-nroll">
                  <h1>New Student Enroll </h1>
                  <p>Today</p>
                </div>
                <hr />
                <div className="main-nroll">
                  <h1>
                    156<span>+</span>
                  </h1>
                  <GroupAddIcon className="box-icon" />
                </div>
              </div>

              <div className="nroll">
                <div className="head-nroll">
                  <h1>Views </h1>
                  <p>Today</p>
                </div>
                <hr />
                <div className="main-nroll">
                  <h1>
                    516<span>+</span>
                  </h1>
                  <VisibilityIcon className="box-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="cal-date">
            <div className="cal-head">
              <h3>Calender</h3>
              <p>+</p>
            </div>
            <div className="main-calendar">
              <Calender />
            </div>
            <div className="time-routine">
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
              <h3>
                09:00 am - 10:00 am <span>Physics</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherHome;
