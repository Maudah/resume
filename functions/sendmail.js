const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {

    let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mhagit55@gmail.com',
            pass: '036741790'
        }
    });

    // transporter.sendMail(
    //     {
    //         from: 'mailer@nodemailer.com',
    //         to: data.email,
    //         subject: `Sending with React, Nodemailer and Netlify`,
    //         html: `
    //             <h3>Email from ${data.name} ${data.email}<h3>
    //             <p>${data.message}<p>
    //             `}
    // ).then(info => {
    //     console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
    // });
    transporter.sendMail({
        from: 'mailer@nodemailer.com',
        to: data.email,
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
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