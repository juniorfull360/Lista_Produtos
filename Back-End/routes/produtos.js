const express = require('express');
const { route } = require('../app');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET' 
    });
});

// INSERI UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'Usando Post'
    });
});

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando PATCH'
    });
});

// DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando DELETE'
    });
})

module.exports = router;