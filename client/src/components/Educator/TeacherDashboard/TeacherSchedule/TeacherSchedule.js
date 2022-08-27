import React from "react";
import TeacherSidebar from "../../../common/Sidebar/TeacherSidebar";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TeacherSchedule.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import TeacherTimeTable from "../../../common/TeacherTimeTable/TeacherTimeTable";
import TeacherMeeting from "../../../common/TeacherMeetings/TeacherMeeting";
function TeacherSchedule() {
  return (
    <div className="educator-schedule">
      <TeacherSidebar />
      <div className="main-schedule">
        <h1>Schedule</h1>
        <div className="body-schedule">
          <div className="l-body-schedule">
            <div className="b-s-header">
              <div className="b-s-sub-header">
                <p>August, 11 Wednesday</p>
                <div>
                  <ArrowBackIosIcon
                    fontSize="small"
                    style={{ marginRight: "13px" }}
                  />
                  <ArrowForwardIosIcon fontSize="small" />
                </div>
              </div>
              <div className="schedule-search">
                <SearchIcon style={{ marginRight: "3px" }} />
                <input type="text" placeholder="Search" />
              </div>
              <SettingsOutlined className="setting-icon" color="action" />
            </div>
            <span>Day</span>
            <span>Week</span>
            <span>Month</span>
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
            <TeacherTimeTable />
          </div>
          <div className="r-body-schedule">
            <div className="cal-date">
              <div className="cal-head">
                <h3>Calender</h3>
                <p>+</p>
              </div>
              <div className="main-calendar">
                <Calender className="main-cal-date" />
              </div>
            </div>
            <div className="meetings">
              <h1>Today's Meetings</h1>
              <span>All</span>
              <span>Pendings</span>
              <TeacherMeeting />
              <TeacherMeeting />
              <TeacherMeeting />
              <TeacherMeeting />
              <TeacherMeeting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSchedule;
