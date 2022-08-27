const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Conversation = mongoose.model("Conversation");

//Select a user for chat making a room of two
router.post("/conversation", async (req, res) => {
  const newConverstion = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConverstion.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/conversation/:studentId", async (req, res) => {
  await Conversation.find({
    members: { $in: [req.params.studentId] },
  })
    .then((conversation) => {
      res.status(200).json(conversation);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
