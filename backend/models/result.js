const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
  values: [Number],
  valuesTransformed: [Number],
  questionnaire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questionnaire'
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
})

module.exports = mongoose.model("Result", resultSchema)