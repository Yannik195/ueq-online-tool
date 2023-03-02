const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema({
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'diverse', null],
    default: 'unknown'
  },
})

module.exports = mongoose.model("Subject", subjectSchema)