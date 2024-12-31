const express = require('express');
const cors = require('cors'); // Importa o CORS

const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo à API!');
});

// Rota de exemplo (GET)
app.get('/api/exemplo', (req, res) => {
    res.json({ mensagem: 'Esta é uma rota GET!' });
});

// Rota de exemplo (POST)
app.post('/api/exemplo', (req, res) => {
    const dados = req.body;
    res.json({ mensagem: 'Dados recebidos!', dados });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
