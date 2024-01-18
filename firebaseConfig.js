const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\marcelo_gomes-jun1\\Desktop\\NodeTrabalhoFB\\serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
