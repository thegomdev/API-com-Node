const db = require('../../firebaseConfig');

const ClientesController = {
    // criando um novo cliente.
    createCliente: async (req, res) => {
        try {
            // cria uma lista na aba coleção 'clientes'.
            const ClientesRef = db.collection('clientes').doc();
            // define os dados do produto no documento recém-criado.
            await ClientesRef.set(req.body);
            // retorna uma resposta indicando sucesso e o ID do novo produto.
            res.status(201).json({ id: ClientesRef.id, ...req.body });
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter todos os clientes.
    getAllClientes: async (req, res) => {
        try {
            // lista todos os clientes na coleção 'clientes'.
            const clientesSnapshot = await db.collection('clientes').get();
            // converte os documentos em objetos e os adiciona a um array.
            const clientes = [];
            clientesSnapshot.forEach(doc => {
                clientes.push({ id: doc.id, ...doc.data() });
            });
            // retorna a lista dos clientes.
            res.status(200).json(clientes);
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter um cliente pelo ID.
    getClienteById: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const clienteRef = db.collection('clientes').doc(req.params.id);
            // procura um cliente pela referência.
            const doc = await clienteRef.get();
            // verifica se o cliente existe, se existir retorna os dados do cliente ou um erro 404.
            if (!doc.exists) {
                res.status(404).send('Cliente não encontrado(a)');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // Método para atualizar um cliente pelo ID
    updateCliente: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const clienteRef = db.collection('clientes').doc(req.params.id);
            // atualiza os dados do produto com os dados fornecidos na requisição.
            await clienteRef.update(req.body);
            // retorna uma resposta indicando sucesso.
            res.status(200).send('Cliente atualizado com sucesso');
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

        // excluir um cliente pelo ID.
        deleteCliente: async (req, res) => {
            try {
                // cria uma referência para o documento com o ID especificado.
                const clienteRef = db.collection('clientes').doc(req.params.id);
                // exclui o documento associado a referência.
                await clienteRef.delete();
                // retorna uma resposta indicando sucesso.
                res.status(200).send('Cliente deletado com sucesso');
            } catch (error) {
                // caso de algum erro, retorna uma resposta de erro do servidor (500).
                res.status(500).send(error.message);
            }
        }

};

// exporta o controlador de produtos para uso em outros arquivos.
module.exports = ClientesController;