const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/SaidaController');

// Rota para criar uma nova saida
router.post('/saidas', SaidaController.createSaida);

// Rota para obter todas as saidas
router.get('/saidas', SaidaController.getAllSaidas);

// Rota para obter uma saida pelo ID
router.get('/saidas/:id', SaidaController.getSaidaById);

// Rota para deletar uma saida
router.delete('/saidas/:id', SaidaController.deleteSaida);

module.exports = router;