// importa as configurações do firebase do arquivo firebaseConfig para estabelecer a conexão com o firestore.
const db = require('../../firebaseConfig');


 // criando um objeto
const EntradaController = {
    // criando nova entrada.
    createEntrada: async (req, res) => {
        try {
            const { id_produto, ...outrasInformacoes } = req.body;

            // Verifica se o produto com o id_produto existe no Firestore.
            const produtoSnapshot = await db.collection('produtos').doc(id_produto).get();

            if (!produtoSnapshot.exists) {
                return res.status(400).json({ error: 'Produto não encontrado.' });
            }
            // O produto existe, então pode continuar criando a entrada.
            // Cria uma lista na aba coleção 'entrada'.
            const EntradaRef = db.collection('entradas').doc();
            // Define os dados do produto no documento recém-criado.
            await EntradaRef.set({
                id_produto,
                ...outrasInformacoes,
            });
            // Retorna uma resposta indicando sucesso e o ID da nova entrada.
            res.status(201).json({ id: EntradaRef.id, id_produto, ...outrasInformacoes });
        } catch (error) {
            // Caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter todas as entradas.
    getAllEntradas: async (req, res) => {
        try {
            // lista todas as saidas na coleção 'entradas'.
            const entradasSnapshot = await db.collection('entradas').get();
            // converte os documentos em objetos e os adiciona a um array.
            const entradas = [];
            entradasSnapshot.forEach(doc => {
                entradas.push({ id: doc.id, ...doc.data() });
            });
            // retorna a lista das saidas.
            res.status(200).json(entradas);
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

    // método para obter uma entrada pelo ID.
    getEntradaById: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const entradaRef = db.collection('entradas').doc(req.params.id);
            // procura a entrada pela referência.
            const doc = await entradaRef.get();
            // verifica se o documento existe, se existir retorna os dados da saida ou um erro 404.
            if (!doc.exists) {
                res.status(404).send('Entrada não encontrada');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    },

        // Método para atualizar uma entrada pelo ID
        updateEntrada: async (req, res) => {
            try {
                // cria uma referência para o documento com o ID especificado.
                const entradaRef = db.collection('entradas').doc(req.params.id);
                // atualiza os dados do produto com os dados fornecidos na requisição.
                await entradaRef.update(req.body);
                // retorna uma resposta indicando sucesso.
                res.status(200).send('Entrada atualizada com sucesso');
            } catch (error) {
                // caso de algum erro, retorna uma resposta de erro do servidor (500).
                res.status(500).send(error.message);
            }
        },
    
    // excluir uma entrada pelo ID.
    deleteEntrada: async (req, res) => {
        try {
            // cria uma referência para o documento com o ID especificado.
            const entradaRef = db.collection('entradas').doc(req.params.id);
            // exclui o documento associado a referência.
            await entradaRef.delete();
            // retorna uma resposta indicando sucesso.
            res.status(200).send('Entrada deletada com sucesso');
        } catch (error) {
            // caso de algum erro, retorna uma resposta de erro do servidor (500).
            res.status(500).send(error.message);
        }
    }

};

// exporta o controlador de produtos para uso em outros arquivos.
module.exports = EntradaController;