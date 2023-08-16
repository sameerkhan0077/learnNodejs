const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },

  father: {
    type: String,
  },

  email: {
    type: String,
    required: [true, "Emile is required"],
    unique: true,
  },

  batch: {
    type: String,
    default: "Javascript",
  },

  address: {
    type: String,
  },

  mobile: {
    type: Number,
  },
});

const studentModel = mongoose.model("Student", studentSchema, "Student");
module.exports = studentModel;
