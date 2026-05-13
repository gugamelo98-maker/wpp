const express = require('express');

const app = express();

app.get('/', (req, res) => {

  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh"
        content="0; url=https://api.whatsapp.com/send?phone=5548996077545&text=Olá%20gostaria%20de%20mais%20informações%20sobre%20o%20CRÉDITO%20DO%20TRABALHADOR">
      </head>

      <body>
        Redirecionando...
      </body>
    </html>
  `);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('Servidor rodando');
});
