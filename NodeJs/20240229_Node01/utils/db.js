const mongoose = require('mongoose');

const pass = 'mongodb+srv://jaiminator21:ydm3wuKSAbuHEN1w@cluster0.tcqgji8.mongodb.net/musica?retryWrites=true&w=majority&appName=Cluster0';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log("INFO: Conexión a BD correcta:", conn.connection.name);
    } catch (error) {
        console.log("ERROR: (f connectMongo) ->", error.message);
    }
};
module.exports = { connectMongo };