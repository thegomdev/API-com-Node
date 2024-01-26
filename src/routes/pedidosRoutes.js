// importando o módulo express.
const express = require('express');
// criando um objeto router do express para gerenciar rotas.
const router = express.Router();
// importando o controlador de saída para lidar com as operações relacionadas às saídas.
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


// exporta o objeto do roteador do express para ser usado em outros arquivos.
module.exports = router;