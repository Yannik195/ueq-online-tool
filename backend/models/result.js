const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
  result: [Number],
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
})

module.exports = mongoose.model("Result", resultSchema)