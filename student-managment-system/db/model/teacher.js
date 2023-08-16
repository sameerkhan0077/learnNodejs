const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Emile is required"],
    unique: true,
  },

  mobile: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
});

const teacherModel = new mongoose.model("teacher", teacherSchema, "teacher");

module.exports = teacherModel;
