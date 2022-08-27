import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import "./TeacherMeeting.css";
function TeacherMeeting() {
  return (
    <div className="educator-meeting">
      <div className="educator-m-info">
        <div>
          <img
            src="https://physics.mit.edu/wp-content/uploads/2020/12/Sara-Seager-cJustinKnight-aspect-ratio-63-63-165x165-c-default.jpg"
            alt
          />
          <div>
            <h3>You have a meeting with John Sir</h3>
            <p>12:00 pm</p>
          </div>
        </div>
        <MoreVertIcon />
      </div>
      <div className="t-join-m">
        <Button>Join Meeting</Button>
      </div>
    </div>
  );
}

export default TeacherMeeting;
