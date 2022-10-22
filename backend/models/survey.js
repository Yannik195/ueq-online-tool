const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Result'
  }],
})

module.exports = mongoose.model("Survey", surveySchema)