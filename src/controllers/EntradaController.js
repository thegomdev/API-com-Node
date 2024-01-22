const db = require('../../firebaseConfig');

const EntradaController = {
    createEntrada: async (req, res) => {
        try {
            const EntradaRef = db.collection('entradas').doc();
            await EntradaRef.set(req.body);
            res.status(201).json({ id: EntradaRef.id, ...req.body });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    
};

module.exports = EntradaController;