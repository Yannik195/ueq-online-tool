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

  //Create unique link
  link_uuid = [
    req.body.product.replaceAll(" ", "-"), //Replace whitespace with -
    "-", //Add -
    Math.floor(1000 + Math.random() * 9000) //4 Random numbers
  ].join("") //bosch-standmixer-29-1232 -> http://localhost:3000/q/fill/bosch-standmixer-29-1232

  console.log(link_uuid);
 

  //TODO: password vershlüssenl

  let questionnaire = new Questionnaire({
    product: req.body.product,
    description: req.body.description,
    link_uuid: link_uuid,
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



//Update Name
router.patch("/", async (req, res) => {
  console.log("Update Productname", req.body);



try {
  const filter_ID = {link_uuid: req.body.link_uuid};
  console.log("Update Link before")
  console.log(filter_ID)

  const update_Name = { product: req.body.product };
  console.log("Update Name before")
  console.log(update_Name)
  

  let updateQuestionaire = await Questionnaire.findOneAndUpdate(filter_ID, update_Name ,{
    new: true,
    upsert: true
  });

  
  //updateQuestionaire.link_uuid;
  //updateQuestionaire.product;

  /*
  updateQuestionaire = await Questionnaire.findOne(filter_ID);
  updateQuestionaire.product;
  */
  console.log("Update Name after")
  console.log(update_Name)

  console.log(updateQuestionaire)
  res.send(updateQuestionaire)
} catch (err) {
  res.status(400).send(err)
 
}


/*
  try { 
    let updateQuestionaire = await Questionnaire.findOneAndUpdate({ link_uuid: req.body.link_uuid },
    { "new": true, "upsert": true },
    console.log(updateQuestionaire),
    console.log(link_uuid, req.body.link_uuid),
    res.send(updateQuestionaire)
    )
  } catch (err) {
    res.status(400).send(err)

  }
*/
})

module.exports = router