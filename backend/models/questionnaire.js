const mongoose = require("mongoose")

const questionnaireSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  results: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Result'
  }],
})

module.exports = mongoose.model("Questionnaire", questionnaireSchema)