const nodemailer = require("nodemailer");
require('dotenv').config({ path: __dirname + './.env' });

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  service: "yahoo",
  port: 465,
  auth: {
    user: process.env.MAIL_FROM,
    pass: process.env.MAIL_PASSWORD, 
  },
  secure: false,
  debug: false,
  logger: true, 
});

const sendMail = (to, passw) => { 
  const options = {
    from: process.env.MAIL_FROM,
    to,
    subject: "Tesla Sidekick Password",
    html: "<p>Use this password to log into your account: "+passw+"</p>",
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log("mailer err: ", err);
        reject(err);
      } else {
        console.log("Sent: ", info);
        // also modify temp password on DB!
        resolve(info);
      }
    });
  });
};

module.exports = sendMail;
