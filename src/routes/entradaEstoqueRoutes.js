const express = require('express');
const router = express.Router();
const EntradaController = require('../controllers/EntradaController');

// Rota para criar uma nova entrada
router.post('/entradas', EntradaController.createEntrada);

// Rota para obter todas as emtradas
router.get('/entradas', EntradaController.getAllEntradas);

// Rota para obter uma entrada pelo ID
router.get('/entradas/:id', EntradaController.getEntradaById);

module.exports = router;