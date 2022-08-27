const express = require("express");
const mongoose = require("mongoose");
const { educatorVerificationController, userFindController, addEducatorReport, updateStarredMail, adminSentMessage, educatorVerified } = require("../controllers/admin");

const router = express.Router();

router.get('/pendingeducators', educatorVerificationController);
router.get("/:id", userFindController);
router.post("/educatorreport", addEducatorReport);
router.patch("/addstarred/:id", updateStarredMail);
router.patch("/sentreport/:id", adminSentMessage);
router.patch("/verified/:id", educatorVerified)
module.exports = router;