const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Stud = mongoose.model("Stud");

router.post("/createstudent", async (req, res) => {
  const student = new Stud(req.body);
  try {
    const newstudent = await student.save();
    res.status(200).json(newstudent);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getstudent/:studentId", async (req, res) => {
  const studentId = req.query.studentId;
  await Stud.findById(studentId)
    .then((studentData) => {
      res.status(200).json(studentData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
