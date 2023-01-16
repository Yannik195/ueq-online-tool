const axios = require('axios');

const sendMail = async function (link_uuid, email) {
  const frontend_url = "https://ueq-frontend.onrender.com/#"
  axios({
    method: 'post',
    url: 'https://api.postmarkapp.com/email/withTemplate',
    data: {
      "TemplateId": 29991310,
      "TemplateModel": {
        "link_url": `${frontend_url}/q/fill/${link_uuid}`
      },
      "From": "pp031@hdm-stuttgart.de",
      "To": email,
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

