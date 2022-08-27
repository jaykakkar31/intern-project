const mongoose = require("mongoose");

const StudSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  image: String,
});

module.exports = mongoose.model("Stud", StudSchema);
