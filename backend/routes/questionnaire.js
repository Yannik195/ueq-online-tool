const router = require("express").Router()
const Questionnaire = require("../models/questionnaire")


router.get("/:id", async (req, res) => {
  console.log("Get questionnaire with id", req.params.id);

  try {
    let questionnaire = await Questionnaire.findById(req.params.id).populate({
      path: 'results',
      populate: {
        path: 'subject'
      }
    })
    console.log(questionnaire)
    res.send(questionnaire)
  } catch (err) {
    res.status(400).send(err)
  }
})

//Save questionnaire
router.post("/", async (req, res) => {
  console.log("Save questionnaire", req.body);

  //Create unique link
  link = [
    req.body.product.replaceAll(" ", "-"), //Replace whitespace with -
    "-", //Add -
    Math.floor(1000 + Math.random() * 9000) //4 Random numbers
  ].join("") //bosch-standmixer-29-1232 -> http://localhost:3000/q/fill/bosch-standmixer-29-1232

  console.log(link);

  let questionnaire = new Questionnaire({
    product: req.body.product,
    description: req.body.description,
    link: link,
    password: req.body.password,
    email: req.body.email,
  })

  try {
    let savedQuestionnaire = await questionnaire.save()
    console.log("Saved questionnaire to DB", savedQuestionnaire)
    res.status(201).send(savedQuestionnaire)
  } catch (err) {
    console.log("Error while saving questionnaire", err)
    res.status(400).send(err)
  }
})


module.exports = router