// importando o módulo express.
const express = require('express');
// criando um objeto router do express para gerenciar rotas.
const router = express.Router();
// importando o controlador de saída para lidar com as operações relacionadas às saídas.
const EntradaController = require('../controllers/EntradaController');

// Rota para criar uma nova entrada
router.post('/entradas', EntradaController.createEntrada);

// Rota para obter todas as entradas
router.get('/entradas', EntradaController.getAllEntradas);

// Rota para obter uma entrada pelo ID
router.get('/entradas/:id', EntradaController.getEntradaById);

// Rota para atualizar uma entrada
router.put('/entradas/:id', EntradaController.updateEntrada);

// Rota para deletar uma entrada
router.delete('/entradas/:id', EntradaController.deleteEntrada);


// exporta o objeto do roteador do express para ser usado em outros arquivos.
module.exports = router;