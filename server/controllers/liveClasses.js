const express = require("express");
const mongoose = require("mongoose");

const { PostClass } = require("../models/postClasses");

exports.getClasses = async (req, res) => {
  try {
    const postClasses = await PostClass.find();
    res.status(200).json(postClasses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getClass = async (req, res) => {
  const { id } = req.params;
  try {
    const postClass = await PostClass.findById(id);
    res.status(200).json(postClass);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createClass = async (req, res) => {
  const newClass = new PostClass(req.body);
  try {
    await newClass.save().then((newClass) => {
      res.status(200).json({ newClass: "Class added successfully" });
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.updateClass = async (req, res) => {
  const { id } = req.params;
  const { title, desc, view, creator, batch, date, time, selectedFile } =
    req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No class with id: ${id}`);
  const updatedClass = {
    title,
    desc,
    creator,
    batch,
    date,
    time,
    selectedFile,
    _id: id,
  };
  await PostClass.findByIdAndUpdate(id, updatedClass, { new: true });
  res.json(updatedClass);
};
exports.deleteClass = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No class with id: ${id}`);

  await PostClass.findByIdAndRemove(id);

  res.json({ message: "Class deleted successfully." });
};
