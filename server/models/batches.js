const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      // required: true,
    },
    desc: {
      type: String,
      // required: true,
    },
    schedule: {
      type: String,
      // required: true,
    },
    content: {
      type: String,
      // required: true,
    },
    educator: {
      type: String,
      // required: true,
    },
    time: {
      type: String,
      // required: true,
    },
    thumbnail: {
      type: String,
    },
    creator: String,
  },
  { timestamps: true }
);

const Batches = mongoose.model("Batches", batchSchema);

exports.Batches = Batches;
