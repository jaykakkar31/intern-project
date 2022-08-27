const express = require("express");
const { Contact } = require("../models/contact");
const contactRouter = express.Router();

contactRouter.route("/").post(function (req, res) {
  let contact = new Contact(req.body);
  contact
    .save()
    .then((contact) => {
      res.status(200).json({ contact: "contact added successfully" });
    })
    .catch((err) => {
      return res.json({ message: err.message });
    });
});

module.exports = contactRouter;
