const router = require("express").Router()
const Survey = require("../models/survey")


//Save Survey
router.post("/", async (req, res) => {
  console.log("Save Survey", req.body);

  let survey = new Survey({
    title: req.body.title
  })

  try {
    savedSurvey = await survey.save()
    console.log("Saved survey to DB", savedSurvey)
    res.status(201).send(savedSurvey)
  } catch (err) {
    console.log("Error while saving survey", err)
    res.status(400).send(err)
  }
})


module.exports = router
