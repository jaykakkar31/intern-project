const express = require("express");
const mongoose = require("mongoose");
const { videoId } = require("../models/VideoId");

// const {
// 	paymentController,
// 	captureController,
// } = require("../controllers/payment");
const { videoIdController } = require("../controllers/educator");
// const { validLogin, validSign } = require("../helpers/validate");
const router = express.Router();

// for registering users
router.post("/videoId", videoIdController);
module.exports = router;