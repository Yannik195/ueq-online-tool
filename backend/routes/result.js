const router = require("express").Router()
const Result = require("../models/result")
const Subject = require("../models/subject")
const Questionnaire = require("../models/questionnaire")


//Save Result
router.post("/", async (req, res) => {
  console.log("Save Result", req.body);

  let subject = new Subject({
    age: req.body.subject.age,
    gender: req.body.subject.gender,
  })

  //Save Subject
  let savedSubject
  try {
    savedSubject = await subject.save()
    console.log("Saved subject to DB", savedSubject)
  } catch (err) {
    console.log("Error while saving subject", err)
    res.status(400).send(err)
  }

  let result = new Result({
    result: req.body.result,
    questionnaire: req.body.questionnaire,
    subject: savedSubject._id,
  })

  let savedResult
  try {
    savedResult = await result.save()
    console.log("Saved result to DB", savedResult)
  } catch (err) {
    console.log("Error while saving result", err)
    res.status(400).send(err)
  }

  //Save Result to questionnaire
  Questionnaire.findByIdAndUpdate(req.body.questionnaire,
    { "$push": { "results": savedResult._id } },
    { "new": true, "upsert": true },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Saved result", savedResult);
        res.status(200).send(savedResult)
      }
    }
  );
})


module.exports = router
