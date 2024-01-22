const express = require('express');
const router = express.Router();
const EntradaController = require('../controllers/EntradaController');

// Rota para criar uma nova entrada
router.post('/entradas', EntradaController.createEntrada);

module.exports = router;