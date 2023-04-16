const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const apiKey = process.env.API_KEY;

const app = express();
let port = process.env.PORT;
// Middleware pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware pour autoriser les requêtes cross-origin
app.use(cors());

// Route pour envoyer les données du formulaire par email
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  // Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mtakoumba@gmail.com',
      pass: apiKey,
    },
  });

  // Configuration du message
  const mailOptions = {
    from: email,
    to: 'mtakoumba@gmail.com',
    subject: `Message of ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Envoi du message
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'email.');
    } else {
      console.log('Email envoyé :', info.response);
      res.send('Votre message a bien été envoyé.');
    }
  });
});

// Démarrage du serveur

if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
