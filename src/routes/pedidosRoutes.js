const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidosController');

// Rota para criar um novo pedido.
router.post('/pedidos', PedidoController.createPedido);

// Rota para obter todos os pedidos.
router.get('/pedidos', PedidoController.getAllPedidos);

// Rota para obter um pedido pelo ID
router.get('/pedidos/:id', PedidoController.getPedidoById);

// Rota para atualizar um pedido
router.put('/pedidos/:id', PedidoController.updatePedido);

// Rota para deletar um pedido
router.delete('/pedidos/:id', PedidoController.deletePedido);

module.exports = router;