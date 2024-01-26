// importa o módulo 'firebase-admin', que é utilizado para interagir com os serviços firebase no ambiente Node.js.
const admin = require('firebase-admin');
// especifica o caminho para o arquivo JSON contendo as credenciais do serviço firebase.
const serviceAccount = require('C:\\Users\\marcelo_gomes-jun1\\Desktop\\NodeTrabalhoFB\\serviceAccountKey.json');
// inicializa o SDK do Firebase com as credenciais fornecidas no arquivo JSON.
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
// obtém uma referência para o firestore, o banco de dados NoSQL oferecido pelo firebase.
const db = admin.firestore();
// exporta a referência do firestore para ser usada em outros arquivos ou módulos.
module.exports = db;
