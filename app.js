const express = require('express');
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\marcelo_gomes-jun1\\Desktop\\NodeTrabalhoFB\\serviceAccountKey.json');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const produtosRoutes = require('./src/routes/produtosRoutes');

// Usar rotas
app.use('/api', produtosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));