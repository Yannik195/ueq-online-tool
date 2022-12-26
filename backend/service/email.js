const axios = require('axios');

const sendMail = async function (link_uuid) {
  axios({
    method: 'post',
    url: 'https://api.postmarkapp.com/email/withTemplate',
    data: {
      "TemplateId": 29991310,
      "TemplateModel": {
        "link_url": `http://localhost:3000/q/fill/${link_uuid}`
      },
      "From": "pp031@hdm-stuttgart.de",
      "To": "pp031@hdm-stuttgart.de",
      "Tag": "Access",
      "TrackOpens": true,
      "TrackLinks": "HtmlOnly",
      "MessageStream": "outbound"
    }, headers: {
      "X-Postmark-Server-Token": process.env.REACT_APP_POSTMARK_API_TOKEN
    }

  }).then(res => {
    console.log(`statusCode: ${res.status}`)
  }).catch(error => {
    console.error(error)
  })
}

module.exports = sendMail;

