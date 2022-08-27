const express = require("express");
const mongoose = require("mongoose");
const {
  registerController,
  signInController,
  activationController,
  userFindController,
  updateController,
  postLiveClasses,
  notificationController,
  infoController,
  bankDetailsController,
  privacyController,
  googleSignInController,
} = require("../controllers/educator");

const { validLogin, validSign } = require("../helpers/validate");
const educatorRouter = express.Router();

educatorRouter.post("/register", validSign, registerController);

educatorRouter.post("/activation/:id", activationController);

educatorRouter.post("/login", validLogin, signInController);

//for google login
educatorRouter.post('/signupwithgoogle', googleSignInController);

educatorRouter.get("/:id", userFindController);

// educatorRouter.put("/:id", updateController);

educatorRouter.post("/personalInfo/:id", infoController);

educatorRouter.patch("/settings/account/:id", updateController);
educatorRouter.patch("/settings/notifications/:id", notificationController);
educatorRouter.patch("/settings/bankDetails/:id", bankDetailsController);
educatorRouter.patch("/settings/privacy/:id", privacyController);

module.exports = educatorRouter;
