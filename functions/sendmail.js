const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, 
        auth: {
                user:'lital.maudah@zohomail.com',
                pass:'jmYh 1tKK rqLb'
        }
    });
    transporter.sendMail({
        from: 'lital.maudah@gmail.com',
        to: 'lital.maudah@gmail.com',
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
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