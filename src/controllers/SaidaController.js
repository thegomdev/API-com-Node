// importa as configurações do firebase do arquivo firebaseConfig para estabelecer a conexão com o firestore.
const db = require('../../firebaseConfig');


 // criando um objeto
const SaidaController = {
    // criando nova saida.
    createSaida: async (req, res) => {
        try {
            const { id_produto, ...outrasInformacoes } = req.body;

            // Verifica se o produto com o id_produto existe no Firestore.
            const produtoSnapshot = await db.collection('produtos').doc(id_produto).get();

            if (!produtoSnapshot.exists) {
                return res.status(400).json({ error: 'Produto não encontrado.' });
            }
            // O produto existe, então pode continuar criando a saida.
            // Cria uma lista na aba coleção 'saida'.
            const SaidaRef = db.collection('saidas').doc();
            // Define os dados do produto no documento recém-criado.
            await SaidaRef.set({
                id_produto,
                ...outrasInformacoes,
            });
            // Retorna uma resposta indicando sucesso e o ID da nova saida.
            res.status(201).json({ id: SaidaRef.id, id_produto, ...outrasInformacoes });
        } catch (error) {
            // Caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },




    // método para obter todas as saidas.
    getAllSaidas: async (req, res) => {
        try {
            // lista todas as saidas na coleção 'saidas'.
            const saidasSnapshot = await db.collection('saidas').get();
            // converte os documentos em objetos e os adiciona a um array.
            const saidas = [];
            saidasSnapshot.forEach(doc => {
                saidas.push({ id: doc.id, ...doc.data() });
            });
            // retorna a lista das saidas.
            res.status(200).json(saidas);
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter uma saida pelo ID.
    getSaidaById: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const saidaRef = db.collection('saidas').doc(req.params.id);
            // procura a saida pela referência.
            const doc = await saidaRef.get();
            // verifica se o documento existe, se existir retorna os dados da saida ou um erro 404.
            if (!doc.exists) {
                res.status(404).send('Saida não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

            // Método para atualizar uma saida pelo ID
            updateSaida: async (req, res) => {
                try {
                    // cria uma referência para o documento com o ID especificado.
                    const saidaRef = db.collection('saidas').doc(req.params.id);
                    // atualiza os dados do produto com os dados fornecidos na requisição.
                    await saidaRef.update(req.body);
                    // retorna uma resposta indicando sucesso.
                    res.status(200).send('Saida atualizada com sucesso');
                } catch (error) {
                    // caso de algum erro, retorna uma resposta de erro do servidor (500).
                    res.status(500).send(error.message);
                }
            },
    
    // excluir uma saida pelo ID.
    deleteSaida: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const saidaRef = db.collection('saidas').doc(req.params.id);
            // exclui o documento associado a referência.
            await saidaRef.delete();
            // retorna uma resposta indicando sucesso.
            res.status(200).send('Saida deletada com sucesso');
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    }
};

// exporta o controlador de produtos para uso em outros arquivos.
module.exports = SaidaController;