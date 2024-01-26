// importa as configurações do firebase do arquivo firebaseConfig para estabelecer a conexão com o firestore.
const db = require('../../firebaseConfig');


 // criando um objeto
const ProdutoController = {
    // criando novo produto.
    createProduto: async (req, res) => {
        try {
            // cria uma lista na aba coleção 'produtos'.
            const produtoRef = db.collection('produtos').doc();
            // define os dados do produto no documento recém-criado.
            await produtoRef.set(req.body);
            // retorna uma resposta indicando sucesso e o ID do novo produto.
            res.status(201).json({ id: produtoRef.id, ...req.body });
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter todos os produtos.
    getAllProdutos: async (req, res) => {
        try {
            // lista todos os produtos na coleção 'produtos'.
            const produtosSnapshot = await db.collection('produtos').get();
            // converte os documentos em objetos e os adiciona a um array.
            const produtos = [];
            produtosSnapshot.forEach(doc => {
                produtos.push({ id: doc.id, ...doc.data() });
            });
            // retorna a lista de produtos.
            res.status(200).json(produtos);
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter um produto pelo ID.
    getProdutoById: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const produtoRef = db.collection('produtos').doc(req.params.id);
            // procura o produto pela referência.
            const doc = await produtoRef.get();
            // verifica se o documento existe, se existir retorna os dados do produto ou um erro 404.
            if (!doc.exists) {
                res.status(404).send('Produto não encontrado');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // Método para atualizar um produto pelo ID
    updateProduto: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const produtoRef = db.collection('produtos').doc(req.params.id);
            // atualiza os dados do produto com os dados fornecidos na requisição.
            await produtoRef.update(req.body);
            // retorna uma resposta indicando sucesso.
            res.status(200).send('Produto atualizado com sucesso');
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // excluir um produto pelo ID.
    deleteProduto: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const produtoRef = db.collection('produtos').doc(req.params.id);
            // exclui o documento associado a referência.
            await produtoRef.delete();
            // retorna uma resposta indicando sucesso.
            res.status(200).send('Produto deletado com sucesso');
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    }
};

// exporta o controlador de produtos para uso em outros arquivos.
module.exports = ProdutoController;
