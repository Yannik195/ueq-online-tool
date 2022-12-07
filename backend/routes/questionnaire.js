const router = require("express").Router()
const Questionnaire = require("../models/questionnaire")


//TODO mit passwort sichern
//Route gibt results und sobjects zurück
//TODO DTO to remove Password
router.get("/evaluate/:link_uuid", async (req, res) => {
  console.log("Get questionnaire with id", req.params.link_uuid);

  try {
    let questionnaire = await Questionnaire.findOne({ link_uuid: req.params.link_uuid }).populate({
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

//Route zum ausfüllen
//gibt keine Results, Subjects zurück
//TODO DTO to remove password
router.get("/fill/:link_uuid", async (req, res) => {
  console.log("Get questionnaire with link", req.params.link_uuid);

  try {
    let questionnaire = await Questionnaire.findOne({ link_uuid: req.params.link_uuid });
    console.log(questionnaire)
    res.send(questionnaire)
  } catch (err) {
    res.status(400).send(err)
  }
})

//Save questionnaire
router.post("/", async (req, res) => {
  console.log("Save questionnaire", req.body);

  //Create LinkUUID
  link_uuid = createLinkUUID(req.body.product)

  //TODO: password vershlüssenl

  let questionnaire = new Questionnaire({
    product: req.body.product,
    description: req.body.description,
    link_uuid: link_uuid,
    password: req.body.password,
    email: req.body.email,
  })

  try {
    // Attempt to save the questionnaire to the MongoDB database using the `save()` method provided by Mongoose
    let savedQuestionnaire = await questionnaire.save()

    // If the questionnaire is successfully saved, log a message and send a 201 (Created) response with the saved questionnaire
    console.log("Saved questionnaire to DB", savedQuestionnaire)
    res.status(201).send(savedQuestionnaire)
  } catch (err) {
    // If there is an error while saving the questionnaire, log the error and send a 400 (Bad Request) response
    console.log("Error while saving questionnaire", err)
    res.status(400).send(err)
  }

})


module.exports = router

function createLinkUUID(str) {
  // Replace spaces with dashes
  const replacedString = str.replace(/ /g, "-");

  // Add a dash at the end of the string
  const withDash = `${replacedString}-`;

  // Generate a UUID
  const uuid = generateUUID();

  // Return the manipulated string with the UUID appended at the end
  return `${withDash}${uuid}`;
}

// Import the uuid npm package
const uuid = require("uuid");

function generateUUID() {
  // Generate a new UUID
  const newUUID = uuid.v4();

  // Return the generated UUID
  return newUUID;
}