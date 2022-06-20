//importar o mongoose
const mongoose = require('mongoose')
//scritps de conexao 
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userAdmin:LUCCA0108052015@fiaptecnico.nw8ac.mongodb.net/test')
}

//exportar as informações para acesso externo 
module.exports = conn