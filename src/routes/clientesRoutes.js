const express = require('express');
const router = express.Router();
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


module.exports = router;