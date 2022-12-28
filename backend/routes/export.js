const router = require("express").Router()
const Questionnaire = require("../models/questionnaire")
const ExcelJS = require('exceljs');


router.get("/excel/:link_uuid", async (req, res) => {
  console.log("Export as Excel", req.params.link_uuid);

  try {
    let questionnaire = await Questionnaire.findOne({ link_uuid: req.params.link_uuid }).populate({
      path: 'results',
      populate: {
        path: 'subject'
      }
    })

    try {
      await generateExcel(questionnaire)
    } finally {
      const file = `${__dirname}/../excel/${questionnaire.link_uuid}.xlsx`;
      console.log(file);
      res.download(file);
      //TODO delete file after export
    }
  } catch (err) {
    res.status(400).send(err)
  }
})

async function generateExcel(questionnaire) {
  const valuesArrays = questionnaire.results.map(object => object.values);
  console.log(valuesArrays);

  const workbook = new ExcelJS.Workbook()

  await workbook.xlsx.readFile(`${__dirname}/../excel/${questionnaire.link_uuid}.xlsx`)
    .then(function () {

      var worksheet = workbook.getWorksheet("Data");

      for (i = 0; i < valuesArrays.length; i++) {
        var row = worksheet.getRow(i + 4);
        row.values = valuesArrays[i]
        row.commit()
      }

      return workbook.xlsx.writeFile(`excel/${questionnaire.link_uuid}.xlsx`);
    })
}

module.exports = router
