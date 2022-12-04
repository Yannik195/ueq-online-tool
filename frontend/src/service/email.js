var postmark = require("postmark");
const axios = require('axios');

const sendMail = async function (){
    axios({
        method: 'post',
        url: 'https://api.postmarkapp.com/email/withTemplate',
        data: {
            "TemplateId": 29991310,
            "TemplateModel": {
                "link_url": "www.test.de",
                "password": "testpassword",
            },
            "From": "pp031@hdm-stuttgart.de",
            "To": "pp031@hdm-stuttgart.de",
            "Tag": "Access",
            "TrackOpens": true,
            "TrackLinks": "HtmlOnly",
            "MessageStream": "outbound"
        }, headers: {
            "X-Postmark-Server-Token": "MUSS ÜBER .env Datei gemacht werden!!! Muss zum Zugangs Token geändert werden!!!"
        }

    }).then(res => {
        console.log(`statusCode: ${res.status}`)
    }).catch(error => {
        console.error(error)
    })
}

sendMail();

