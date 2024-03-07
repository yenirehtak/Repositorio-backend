const mongoose = require('mongoose')

const EsquemaCliente = new mongoose.Schema(
    {
        nombre: String,
        email: String,
        clave: String,
    }
)

const ModeloCliente = mongoose.model("clientes",EsquemaCliente);
module.exports = ModeloCliente;