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

  //Takes the req.body and extracts the values and values_transformed
  let [values, valuesTransformed] = getValues(req.body);

  let result = new Result({
    values: values,
    valuesTransformed: valuesTransformed,
    link_uuid: req.body.link_uuid,
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
  Questionnaire.findOneAndUpdate({ link_uuid: req.body.link_uuid },
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


/**
 * Extracts the "value" and "value_transformed" properties from the objects in the "result" array of the given object,
 * and returns them as two separate arrays.
 *
 * @param {object} obj - The object containing the "result" array
 * @returns {array} - An array containing two elements: the first element is an array of "value" properties,
 *                    and the second element is an array of "value_transformed" properties
 */
function getValues(obj) {
  let values = [];
  let valuesTransformed = [];

  // iterate over the result array
  for (let i = 0; i < obj.result.length; i++) {
    // get the value and value_transformed properties
    let value = obj.result[i].value;
    let valueTransformed = obj.result[i].value_transformed;

    // add the values to the appropriate arrays
    values.push(value);
    valuesTransformed.push(valueTransformed);
  }

  // return the arrays
  return [values, valuesTransformed];
}
