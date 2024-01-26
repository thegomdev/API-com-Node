// importando o módulo express.
const express = require('express');
// criando um objeto router do express para gerenciar rotas.
const router = express.Router();
// importando o controlador de saída para lidar com as operações relacionadas às saídas.
const ClientesController = require('../controllers/ClientesController');



// Rota para criar um novo cliente
router.post('/clientes', ClientesController.createCliente);

// Rota para obter todos os clientes
router.get('/clientes', ClientesController.getAllClientes);

// Rota para obter uma entrada pelo ID
router.get('/clientes/:id', ClientesController.getClienteById);

// Rota para atualizar um cliente
router.put('/clientes/:id', ClientesController.updateCliente);

// Rota para deletar um cliente
router.delete('/clientes/:id', ClientesController.deleteCliente);



// exporta o objeto do roteador do express para ser usado em outros arquivos.
module.exports = router;