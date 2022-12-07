const mongoose = require("mongoose")

const questionnaireSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link_uuid: {
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
}, { timestamps: true })

module.exports = mongoose.model("Questionnaire", questionnaireSchema)