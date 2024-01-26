// importando o módulo express.
const express = require('express');
// criando um objeto router do express para gerenciar rotas.
const router = express.Router();
// importando o controlador de saída para lidar com as operações relacionadas às saídas.
const SaidaController = require('../controllers/SaidaController');

// Rota para criar uma nova saida
router.post('/saidas', SaidaController.createSaida);

// Rota para obter todas as saidas
router.get('/saidas', SaidaController.getAllSaidas);

// Rota para obter uma entrada pelo ID
router.get('/saidas/:id', SaidaController.getSaidaById);

// Rota para atualizar uma saida
router.put('/saidas/:id', SaidaController.updateSaida);

// Rota para deletar uma entrada
router.delete('/saidas/:id', SaidaController.deleteSaida);


// exporta o objeto do roteador do express para ser usado em outros arquivos.
module.exports = router;