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

const generatePassword = () => {
    var length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

const sendMail = (to) => {
  const tempPassword = generatePassword();
  const options = {
    from: process.env.MAIL_FROM,
    to,
    subject: "env works slow?",
    html: "<p>Use this password: "+tempPassword+"</p>",
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
