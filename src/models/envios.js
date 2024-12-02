const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Subdocumento de Dirección
const direccionSchema = new Schema({
    calleC: { type: String, required: true },
    numeroC: { type: Number, required: true }, // Cambié a Number porque son valores numéricos
    ciudad: { type: String, required: true },
    cpC: { type: String, required: true },
});

// Subdocumento de Oficina
const oficinaSchema = new Schema({
    _idO: { type: String, required: true }, // Cambié a _idO para igualar tu ejemplo
    nombreO: { type: String, required: true },
    direccion: { type: direccionSchema, required: true },
    TelefonoO: { type: String, required: true }, // Aseguramos el nombre como en tu ejemplo
    emailO: { type: String, required: true },
});

// Subdocumento de Cliente
const clienteSchema = new Schema({
    _CURP: { type: String, required: true }, // Cambié a _CURP para igualar tu ejemplo
    nombreC: { type: String, required: true },
    apellidosC: { type: String, required: true },
    emailC: { type: String, required: true },
});

// Esquema principal de Envío
const envioSchema = new Schema(
    {
        _idE: { type: String, required: true, unique: true }, // Cambié a _idE para igualar tu ejemplo
        fechaE: { type: String, required: true }, // Mantengo como String para que acepte "YYYY/MM/DD"
        origenE: { type: oficinaSchema, required: true }, // Oficina como subdocumento
        destinoE: { type: oficinaSchema, required: true }, // Oficina como subdocumento
        tipoE: { type: String, required: true, ref: 'TipoEnvio' }, // Referencia al modelo TipoEnvio
        clienteE: { type: clienteSchema, required: true }, // Cliente como subdocumento
        pesoE: { type: String, required: true },
        dimensionesE: { type: String, required: true },
        costoTotalE: { type: String, required: true },
        estatusE: { type: String, required: true },
    },
    {
        timestamps: true, // Agrega createdAt y updatedAt automáticamente
    }
);

const Envio = model('Envio', envioSchema);

module.exports = Envio;
