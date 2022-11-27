const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', null],
    default: 'unknown'
  },
})

module.exports = mongoose.model("Subject", subjectSchema)