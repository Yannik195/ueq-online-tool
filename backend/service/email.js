const axios = require('axios');
const questionnaire = require('../models/questionnaire');

const link_url_variable = "www.test123.de";

const sendMail = async function (link_uuid){
    axios({
        method: 'post',
        url: 'https://api.postmarkapp.com/email/withTemplate',
        data: {
            "TemplateId": 29991310,
            "TemplateModel": {
                "link_url": `${questionnaire.newUUID}`,
                "password": "testpassword",
            },
            "From": "pp031@hdm-stuttgart.de",
            "To": "pp031@hdm-stuttgart.de",
            "Tag": "Access",
            "TrackOpens": true,
            "TrackLinks": "HtmlOnly",
            "MessageStream": "outbound"
        }, headers: {
            "X-Postmark-Server-Token": "Muss hier eingefügt werden!"
        }

    }).then(res => {
        console.log(`statusCode: ${res.status}`)
    }).catch(error => {
        console.error(error)
    })
}

sendMail();

