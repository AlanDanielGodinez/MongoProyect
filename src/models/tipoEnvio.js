// /src/models/tipoEnvio.js
// Importar mongoose para definir esquema y modelo
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tipoEnvioSchema = new Schema({
    _id: {
        type: String, // Usamos _id directamente como el identificador único
    },
    descripcion: {
        type: String,
        required: true
    },
    precioXkm: {
        type: String,
        required: true
    },
    tiempoEntrega: {
        type: String,
        required: true,
    },
}, 
{
    // Configuración de opciones del esquema: timestamps agrega createdAt y updatedAt automáticamente
    timestamps: true
});

const TipoEnvio = model('TipoEnvio', tipoEnvioSchema);
module.exports = TipoEnvio;
