// importando o módulo express.
const express = require('express');
// criando um objeto router do express para gerenciar rotas.
const router = express.Router();
// importando o controlador de saída para lidar com as operações relacionadas às saídas.
const ProdutoController = require('../controllers/ProdutoController');

// Rota para criar um novo produto
router.post('/produtos', ProdutoController.createProduto);

// Rota para obter todos os produtos
router.get('/produtos', ProdutoController.getAllProdutos);

// Rota para obter um produto pelo ID
router.get('/produtos/:id', ProdutoController.getProdutoById);

// Rota para atualizar um produto
router.put('/produtos/:id', ProdutoController.updateProduto);

// Rota para deletar um produto
router.delete('/produtos/:id', ProdutoController.deleteProduto);


// exporta o objeto do roteador do express para ser usado em outros arquivos.
module.exports = router;