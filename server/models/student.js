const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// when a student registers, the boolean isAuthenticated is set to false,
// only when a user activates his/her account, it is set to true
// and the user can login.

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
    },
    isAuthenticated: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
    },
    role : {
      type : String,
    },
    subscription : {
      type : []
    },
    notifications: {
      type: [],
      default: [
        {
          id: 1,
          name: "Class Reminder",
          value: {
            email: true,
            mobile: true,
            push: true,
          },
        },
        {
          id: 2,
          name: "Quiz Reminder",
          value: {
            email: true,
            mobile: true,
            push: true,
          },
        },
        {
          id: 3,
          name: "Quiz Results",
          value: {
            email: true,
            mobile: true,
            push: true,
          },
        },
        {
          id: 4,
          name: "New Recommneded Courses",
          value: {
            email: true,
            mobile: true,
            push: true,
          },
        },
        {
          id: 5,
          name: "Payments reminder",
          value: {
            email: true,
            mobile: true,
            push: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

exports.Student = Student;
