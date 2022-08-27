const express = require("express");
const mongoose = require("mongoose");
const { paymentController, captureController } = require("../controllers/payment");
const {
  registerController,
  signInController,
  activationController,
  userFindController,
  updateController,
  notificationController,
  googleSignInController,
  addCourseController,
} = require("../controllers/student");
const { validLogin, validSign } = require("../helpers/validate");
const router = express.Router();


// for registering users
router.post('/register', validSign, registerController);

// for account activation
router.post('/activation/:id', activationController);

// for login
router.post('/login', validLogin, signInController);

//for google login
router.post('/signupwithgoogle', googleSignInController);

// to find user with a given id 
router.get('/:id', userFindController);

// to update user details of given id 
router.put('/:id', updateController);

// to update notificaitons permissions of a student
router.patch("/notifications/:id", notificationController);

//for student payment
router.post("/razorpay", paymentController);
//payment verification
router.post("/capture/:paymentId", captureController);
//add subscription course
router.put("/addcourse/:id", addCourseController);
module.exports = router;
