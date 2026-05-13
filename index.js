const express = require('express');

const app = express();

app.get('/', (req, res) => {

  const numero = '5548996077545';

  const mensagem = encodeURIComponent(
   'Olá gostaria de mais informações sobre o CRÉDITO DO TRABALHADOR'
  );

  const ua = req.headers['user-agent'] || '';

  let url;

  // iPhone
  if (/iPhone|iPad|iOS/i.test(ua)) {

    url =
    `https://wa.me/${numero}?text=${mensagem}`;

  }

  // Android
  else if (/Android/i.test(ua)) {

    url =
    `intent://send?phone=${numero}&text=${mensagem}#Intent;scheme=smsto;package=com.whatsapp;end`;

  }

  // Desktop
  else {

    url =
    `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

  }

  res.writeHead(302, {
    'Location': url,
    'Cache-Control': 'no-cache'
  });

  res.end();

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor iniciado');
});
