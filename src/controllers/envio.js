const Envio = require('../models/envios'); // Importar el modelo de Envio

// Obtener todos los envíos
const obtenerEnvios = async (req, res) => {
  try {
    const envios = await Envio.find();
    res.status(200).json(envios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo envío
const crearEnvio = async (req, res) => {
  const nuevoEnvio = new Envio(req.body);  // Se asume que los datos llegan en req.body
  try {
    const envioGuardado = await nuevoEnvio.save();
    res.status(201).json(envioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crear varios envíos
const crearq0 = async (req, res) => {
  try {
    const envioGuardado = await Envio.insertMany(req.body);
    res.status(201).json(envioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener un envío por su ID
const obtenerEnvioID = async (req, res) => {
  try {
    const envio = await Envio.findOne({ _idE: req.params._idE }); // Utilizando `req.params._idE`
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envío' });
    }
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un envío por su ID
const actualizarEnvio = async (req, res) => {
  try {
    const envioActualizado = await Envio.findOneAndUpdate({ _idE: req.params._idE }, req.body, {
      new: true
    });
    if (!envioActualizado) {
      return res.status(404).json({ message: 'No se encontró el envío' });
    }
    res.status(200).json(envioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un envío por su ID
const eliminarEnvio = async (req, res) => {
  try {
    const envio = await Envio.findOneAndDelete({ _idE: req.params._idE });
    if (!envio) {
      return res.status(404).json({ message: 'No se encontró el envío' });
    }
    res.status(200).json({ message: 'Envío eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear envíos masivos
const crearEnviosMasivos = async (req, res) => {
  try {
    const envios = req.body;
    if (!Array.isArray(envios) || envios.length === 0) {
      return res.status(400).json({ message: 'Debe proporcionar una lista de envíos.' });
    }
    const enviosGuardados = await Envio.insertMany(envios);
    res.status(201).json(enviosGuardados);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Filtros de consultas personalizadas

// Obtener envíos por origen y estatus 'transito'
const getQ2 = async (req, res) => {
  try {
    const envio = await Envio.find({ "origenE._idO": req.params.origenE, estatusE: "transito" });
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener envíos por tipo
const getQ3 = async (req, res) => {
  try {
    const envio = await Envio.find({ tipoE: req.params.tipoE });
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener envíos por cliente
const getQ4 = async (req, res) => {
  try {
    const envio = await Envio.find({ "clienteE._CURP": req.params.clienteE });
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener envíos por origen
const getQ5 = async (req, res) => {
  try {
    const envio = await Envio.find({ "origenE._idO": req.params.origenE });
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener envíos por estatus
const getQ6 = async (req, res) => {
  try {
    const envio = await Envio.find({ estatusE: req.params.estatusE });
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener envíos por origen y tipo 'tE03'
const getQ8 = async (req, res) => {
  try {
    const envio = await Envio.find({ "origenE._idO": req.params.origenE, tipoE: "tE03" });
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  obtenerEnvios,
  crearEnvio,
  obtenerEnvioID,
  actualizarEnvio,
  eliminarEnvio,
  crearEnviosMasivos,
  crearq0,
  getQ2,
  getQ3,
  getQ4,
  getQ5,
  getQ6,
  getQ8
};
