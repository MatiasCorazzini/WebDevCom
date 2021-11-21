const indexCtrl = {};
const nodemailer = require('nodemailer');
const { prototype } = require('nodemailer/lib/dkim');

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.sendForm = async(req, res) => {
  const {name:name, last:last, email:email, info:info} = req.body;

  console.log("Sending Email...");

  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com.',
      port: 587,
      auth: {
          user: 'webdevcombot@gmail.com',
          pass: 'Colacompany2020'
      }
  });

  const mailOptions = {
      from: "webdevcombot@gmail.com", // sender address
      to: "matiascorazzini@gmail.com, tomasmalleret@gmail.com ", // list of receivers
      subject: "Pedido de WebdevCom en espera.", // Subject line
      html: `<div><p>Solicitud de ${name} ${last} (${email}), que dice lo siguiente:</p></div><div><p><b>${info}</b></p></div>`, // html body
  }

  await transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          console.log(error.message);
      } else {
          console.log("Email sent.");
          res.redirect('/');
      }
  });
};

module.exports = indexCtrl;
