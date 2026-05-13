const express = require('express');

const app = express();

app.get('/', (req, res) => {

  const mensagem = encodeURIComponent(
   'Olá gostaria de mais informações sobre o CRÉDITO DO TRABALHADOR'
  );

  const userAgent = req.headers['user-agent'] || '';

  let url;

  if (/Android/i.test(userAgent)) {

    url =
    `intent://send?phone=5548996077545&text=${mensagem}#Intent;scheme=smsto;package=com.whatsapp;end`;

  } else {

    url =
    `https://wa.me/5548996077545?text=${mensagem}`;

  }

  res.redirect(302, url);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
