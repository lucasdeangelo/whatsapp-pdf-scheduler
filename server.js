const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota para o frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Frontend rodando!`);
});