// importando o módulo express.
const express = require('express');
// criando uma instância do aplicativo Express.
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\marcelo_gomes-jun1\\Desktop\\NodeTrabalhoFB\\serviceAccountKey.json');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const produtosRoutes = require('./src/routes/produtosRoutes');
const entradaEstoqueRoutes = require('./src/routes/entradaEstoqueRoutes');
const saidaEstoqueRoutes = require('./src/routes/saidaEstoqueRoutes');
const clientesRoutes = require('./src/routes/clientesRoutes');
const pedidosRoutes = require('./src/routes/pedidosRoutes');

// Usar rotas
app.use('/api', produtosRoutes);
app.use('/api', entradaEstoqueRoutes);
app.use('/api', saidaEstoqueRoutes);
app.use('/api', clientesRoutes);
app.use('/api', pedidosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));