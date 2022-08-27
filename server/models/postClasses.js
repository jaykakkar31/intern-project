const mongoose = require("mongoose");

const classesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },

    batch: {
      type: String,
      // required: true,
      trim: true,
    },
    date: {
      type: String,
      // required: true,
      trim: true,
    },
    time: {
      type: String,
      // required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      // required: true,
    },
    name: String,
    creator: String,
  },
  { timestamps: true }
);

const PostClass = mongoose.model("PostClass", classesSchema);

exports.PostClass = PostClass;
