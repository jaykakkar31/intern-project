const express = require("express");
const {
  getClasses,
  getClass,
  createClass,
  updateClass,
  deleteClass,
} = require("../controllers/liveClasses");

const liveClassRouter = express.Router();
// const { auth } = require("../middleware/auth.js");

liveClassRouter.get("/classes", getClasses);
liveClassRouter.post("/", createClass);
liveClassRouter.put("/:id", updateClass);
liveClassRouter.delete("/:id", deleteClass);

module.exports = liveClassRouter;
