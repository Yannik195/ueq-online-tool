var postmark = require("postmark");
const axios = require('axios');

const link_url_variable = "www.test123.de";


const sendMail = async function (){
    axios({
        method: 'post',
        url: 'https://api.postmarkapp.com/email/withTemplate',
        data: {
            "TemplateId": 29991310,
            "TemplateModel": {
                "link_url": `${link_url_variable}`,
                "password": "testpassword",
            },
            "From": "pp031@hdm-stuttgart.de",
            "To": "pp031@hdm-stuttgart.de",
            "Tag": "Access",
            "TrackOpens": true,
            "TrackLinks": "HtmlOnly",
            "MessageStream": "outbound"
        }, headers: {
            "X-Postmark-Server-Token": "Muss über env Datei geändert werden! TODO: Schauen wie man den Key über die env. bekommt"
        }

    }).then(res => {
        console.log(`statusCode: ${res.status}`)
    }).catch(error => {
        console.error(error)
    })
}

sendMail();

