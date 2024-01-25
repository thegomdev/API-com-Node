const db = require('../../firebaseConfig');

const PedidoController = {

    
   // criando novo pedido.
    createPedido: async (req, res) => {
        try {
            // cria uma lista na aba coleção 'pedidos'.
            const PedidoRef = db.collection('pedidos').doc();
            // define os dados do produto no documento recém-criado.
            await PedidoRef.set(req.body);
            // retorna uma resposta indicando sucesso e o ID do novo produto.
            res.status(201).json({ id: PedidoRef.id, ...req.body });
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter todos os pedidos.
    getAllPedidos: async (req, res) => {
        try {
            // lista todos os pedidos na coleção 'pedidos'.
            const pedidosSnapshot = await db.collection('pedidos').get();
            // converte os documentos em objetos e os adiciona a um array.
            const pedidos = [];
            pedidosSnapshot.forEach(doc => {
                pedidos.push({ id: doc.id, ...doc.data() });
            });
            // retorna a lista das saidas.
            res.status(200).json(pedidos);
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter um pedido pelo ID.
    getPedidoById: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const pedidoRef = db.collection('pedidos').doc(req.params.id);
            // procura o pedido pela referência.
            const doc = await pedidoRef.get();
            // verifica se o documento existe, se existir retorna os dados da saida ou um erro 404.
            if (!doc.exists) {
                res.status(404).send('Pedido não encontrado');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

        // excluir um pedido pelo ID.
        deletePedido: async (req, res) => {
            try {
                // cria uma referência para o documento com o ID especificado.
                const pedidoRef = db.collection('pedidos').doc(req.params.id);
                // exclui o documento associado a referência.
                await pedidoRef.delete();
                // retorna uma resposta indicando sucesso.
                res.status(200).send('Pedido deletado com sucesso');
            } catch (error) {
                // caso de algum erro, retorna uma resposta de erro do servidor (500).
                res.status(500).send(error.message);
            }
        }

};

// exporta o controlador de produtos para uso em outros arquivos.
module.exports = PedidoController;