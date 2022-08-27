import React, { useEffect, useState } from "react";
import "./TeacherContact.css";
import SendIcon from "@material-ui/icons/Send";
import { getStudent } from "../../../services/api";
function TeacherContact({ conversation, currentStudent_id }) {
  const [student, setStudent] = useState(null);

  useEffect(async () => {
    const friendId = conversation.members.find((m) => m !== currentStudent_id);
    try {
      const studentData = await getStudent(friendId);
      setStudent(studentData.data);
    } catch (err) {
      console.log(err);
    }
  }, [conversation, currentStudent_id]);
  return (
    <div className="educator-contact">
      <div className="t-contact-info">
        <div>
          <img src={student?.image} alt />
          <div>
            <h1>{student?.name}</h1>
            <p>Online</p>
          </div>
        </div>
        <p>28m ago</p>
      </div>
      {/* <div className="t-message">
        <p>Lorem ipsum dolor sit amel, conserffd....</p>
        <div>
                    <SendIcon fontSize='medium' style={{marginBottom:'20px'}}/>
                </div>
      </div> */}
    </div>
  );
}

export default TeacherContact;
