const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Course = mongoose.model("Course");
router.post("/createclass", (req, res) => {
  const course = new Course({
    name: "Khan Sir",
    specialist: "#1 educator in IIT Physics",
    image:
      "https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    languages: ["English", "Hindi"],
    followers: "15k",
    batches: "20+ Batches",
    dailyclasses: "5+ Daily Live Classes",
    classes: [
      {
        day: "Today",
        class: [
          {
            subject: "Physics",
            time: "9 am",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "3 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
        ],
      },
      {
        day: "Tomorrow",
        class: [
          {
            subject: "Physics",
            time: "9 am",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "3 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
        ],
      },
    ],
    bestclasses: [
      {
        day: "Today",
        class: [
          {
            subject: "Physics",
            time: "9 am",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "3 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
          {
            subject: "Physics",
            time: "6 pm",
            topic: "Basic Fundamental of Electrodynamics",
          },
        ],
      },
    ],
  });
  course.save();
});

router.get("/teacherprofile", (req, res) => {
  Course.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
