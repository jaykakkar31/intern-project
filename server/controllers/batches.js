const express = require("express");

const { Batches } = require("../models/batches");

exports.createBatch = async (req, res) => {
  const newBatch = Batches(req.body);
  try {
    await newBatch.save().then((newBatch) => {
      res.status(200).json({ newBatch: "Batch added successfully" });
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
