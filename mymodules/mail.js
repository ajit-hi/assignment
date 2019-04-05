var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'assignmentalgo@gmail.com',
    pass: 'Strong123'
  }
});

module.exports = function mail(email){

    var mailOptions = {
        from: 'assignmentalgo@gmail.com',
        to: email,
        subject: 'Confirmation',
        text: 'Your response has been saved!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}



