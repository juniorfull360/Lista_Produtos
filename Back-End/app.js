const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos);

// QUANDO NAO ACHA A ROTA
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    res.send(erro);
});

module.exports = app;