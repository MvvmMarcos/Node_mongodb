const {MongoClient} = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/testemongodb";

const client = new MongoClient(uri);

async function run(){
    try {
        await client.connect();
        console.log('Conectamos ao mongodb')
        
    } catch (error) {
        console.log(`Erro ao conectar ao banco: ${error}`)
    }
}
run();

module.exports = client