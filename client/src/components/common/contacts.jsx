import React, { useState } from "react";
import { TextField, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import { sendContacts } from "../../services/api";
import SingleQuestion from "./question";
import Footer from "../common/Footer";
import "./contacts.scss";

export const Contact = () => {
  const data = [
    {
      id: 1,
      title: "IEZAL Classes and courses are available for which students?",
      info: "IEZAL courses and classes are available for 11-12, NEET and IIT-JEE, and all competitive exam aspirants.",
    },
    {
      id: 2,
      title: "Can students clear their doubts during IEZAL online classes?",
      info: "Yes, students can ask their all queries while attending real-time classes via using the raising hand’s function or drop the doubts on the chat box present below the screen. The teacher will get students to massage instantly and will assist students in resolving their doubts.",
    },
    {
      id: 3,
      title: "Do IEZAL give recording of live classes and homework?",
      info: "Yes, IEZAL teachers provide live classes recording of respective classes. Also, the teacher will give homework on a regular basis to analyse the progress of students.",
    },
    {
      id: 4,
      title: "How is IEZAL different from other E-learning platforms?",
      info: "IEZAL Classes is a complete online education platform for students who want to study and learn differently.  IEZAL provides an AI-enabled system in which students can track their performances and growth with the help of graphs. These AI automated graphs will record students’ activeness, test scores, and the number of classes they attend. ",
    },
    {
      id: 5,
      title: "How IEZAL Classes is it better than regular tuition classes?",
      info: "IEZAL Classes have a team of the most excellent teachers in the country;  students will get individual attention from teachers, real-time class experience, and the first e-learning platform with an AI-enabled system that will keep track of students' performance.  These all features make IEZAL Classes the best online education platform for students. And above all, students' comfort to attend classes anytime and anywhere makes it better than regular tuition classes.",
    },
    {
      id: 6,
      title: "What is a free demo class, and how can students register for a demo class?",
      info: "In demo classes, students will get 1-2 free live classes to students who want to register in the IEZAL platform. The demo class will help students to experience IEZAL Classes first-hand. This is an excellent way for students to learn about IEZAL's teaching style and resolve their doubts.",
    },
  ];
  const [contactDetails, setContactDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      fName: contactDetails.fName,
      lName: contactDetails.lName,
      email: contactDetails.email,
      mobile: contactDetails.mobile,
      message: contactDetails.message,
    };
    try {
      sendContacts(newContact).then((res) => console.log(res.data));
      setContactDetails({
        fName: "",
        lName: "",
        email: "",
        mobile: "",
        message: "",
      });
      console.log("Message Sent!");
    } catch (error) {
      console.log(error.message);
    }
  };
  function handleChange(event) {
    const { name, value } = event.target;

    setContactDetails({ ...contactDetails, [name]: value });
  }

  const questions = data;
  return (
    <div className="contact_us">
      <div className="contact">
        {/* //////////////// DETAIL SECTION ////////////*/}
        <div className="detail_box shadow">
          <h2 className="ms-5 mt-5">Contact Info</h2>
          <div className="detail">
            <LocationOnIcon
              style={{ fontSize: 35, marginRight: 2, marginTop: 8 }}
            />
            <span>3434 Indori nagar, Near JIO Tower, Jaipur, India </span>
          </div>
          <div className="detail">
            <EmailIcon style={{ fontSize: 28, marginRight: 4, marginTop: 7 }} />
            <span>iezal.edtech@gmail.com</span>
          </div>
          <div className="detail">
            <LocalPhoneIcon
              style={{ fontSize: 30, marginRight: 4, marginTop: 6 }}
            />
            <span> 91+ 7098773450 , 2334599</span>
          </div>
        </div>
​
        {/* //////////////// FORM SECTION ////////////*/}
​
        <div className="form_box shadow">
          <h4 className="send_msg">
            <b>Send a Message</b>
          </h4>
          <form className="form" onSubmit={handleSubmit}>
            <Grid className="text" item lg={6} md={12} xs={12} sm={12}>
              <label>First Name</label>
              <TextField
                size="small"
                name="fName"
                autoFocus="true"
                type="string"
                variant="standard"
                label=""
                required
                value={contactDetails.fName}
                onChange={handleChange}
              />
            </Grid>
            <Grid className="text" item xs={12} sm={12} md={12} lg={6}>
              <label>Last Name</label>
​
              <TextField
                name="lName"
                type="string"
                required
                variant="standard"
                label=""
                value={contactDetails.lName}
                onChange={handleChange}
              />
            </Grid>
            <Grid className="text" item xs={12} sm={12} lg={6} md={12}>
              <label>Email Address</label>
​
              <TextField
                name="email"
                variant="standard"
                type="email"
                required
                label=""
                value={contactDetails.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid className="text" item xs={12} md={12} sm={12} lg={6}>
              <label>Mobile Number</label>
              <TextField
                name="mobile"
                variant="standard"
                required
                type="string"
                label=""
                value={contactDetails.mobile}
                onChange={handleChange}
              />
            </Grid>
            <Grid className="text" item xs={12} lg={12} sm={12} md={12}>
              <label>Write a message here </label>
              <TextField
                name="message"
                type="string"
                variant="standard"
                label=""
                fullwidth
                required
                multiline
                rows={4}
                value={contactDetails.message}
                onChange={handleChange}
              />{" "}
            </Grid>
            <br />
            <Grid className="text" item xs={12} sm={12} md={6}>
              <button type="submit" className="send_btn">
                <h5>Send</h5>
              </button>
            </Grid>
          </form>
        </div>
      </div>
​
      {/* /////////////FAQ SECTION /////////////// */}
​
      <div className="faq">
        <h1 className=" faq_title">
          <b>FAQ</b>
        </h1>
        <section className="info-1 shadow">
          <ul>
            {questions.map((question, index) => {
              return (
                <li className="que" key={index}>
                  <SingleQuestion
                    className="singleQuestion"
                    key={question.id}
                    {...question}
                  ></SingleQuestion>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      
    </div>
  );
};
export default Contact;