const http = require('http');
 
const PHONE = '5548996077545';
const MESSAGE = encodeURIComponent('Olá! Vim pelo anúncio e gostaria de mais informações.');
 
const server = http.createServer((req, res) => {
  res.writeHead(301, {
    'Location': `https://wa.me/${PHONE}?text=${MESSAGE}`,
    'Cache-Control': 'no-cache'
  });
  res.end();
});
 
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
 
