const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: false,
        rejectUnauthorized:false,
        auth: {
                user:'lital.maudah@zohomail.com',
                pass:'jmYh 1tKK rqLb'
        }
    });
    transporter.sendMail({
        from: 'lital.maudah@gmail.com',
        to: 'mhagit55@gmail.com',
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `<p>Blaa</p>`
        // `
        //     <h3>Email from ${data.name} ${data.email}<h3>
        //     <p>${data.message}<p>
        //     `
    }, function (error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    'result': 'success'
                })
            });
        }
    });
}