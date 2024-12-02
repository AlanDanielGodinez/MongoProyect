const TipoEnvio = require('../models/tipoEnvio');

// Obtener todos los tipos de envío
const obtenerTiposE = async (req, res) => {
  try {
    const tipoEnvios = await TipoEnvio.find();
    res.status(200).json(tipoEnvios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo tipo de envío
const crearTipoE = async (req, res) => {
  try {
    const nuevoTipoE = new TipoEnvio(req.body);
    const tipoGuardado = await nuevoTipoE.save();
    res.status(201).json(tipoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Crear múltiples tipos de envío (inserción masiva)
const crearq0 = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ message: 'Se espera un arreglo de objetos para la inserción.' });
    }

    // Obtener todos los IDs que están intentando insertar
    const ids = req.body.map(tipo => tipo._id);
    const existingDocs = await TipoEnvio.find({ _id: { $in: ids } });

    if (existingDocs.length > 0) {
      const existingIds = existingDocs.map(doc => doc._id);
      return res.status(400).json({ 
        message: `Algunos de los documentos ya existen con los siguientes _id: ${existingIds.join(", ")}` 
      });
    }

    const tiposGuardados = await TipoEnvio.insertMany(req.body);
    res.status(201).json(tiposGuardados);
  } catch (error) {
    console.error("Error en crearq0:", error);
    res.status(400).json({ message: error.message });
  }
};

// Obtener un tipo de envío por ID
const obtenerTipoEID = async (req, res) => {
  try {
    const tipoEnvio = await TipoEnvio.findById(req.params.idTE);
    if (!tipoEnvio) {
      return res.status(404).json({ message: 'No se encontró el tipo de envío' });
    }
    res.status(200).json(tipoEnvio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un tipo de envío por ID
const actualizarTipoE = async (req, res) => {
  try {
    const tipoActualizado = await TipoEnvio.findByIdAndUpdate(req.params.idTE, req.body, {
      new: true,
      runValidators: true
    });
    if (!tipoActualizado) {
      return res.status(404).json({ message: 'No se encontró el tipo de envío' });
    }
    res.status(200).json(tipoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un tipo de envío por ID
const eliminarTipoE = async (req, res) => {
  try {
    const tipoEnvio = await TipoEnvio.findByIdAndDelete(req.params.idTE);
    if (!tipoEnvio) {
      return res.status(404).json({ message: 'No se encontró el tipo de envío' });
    }
    res.status(200).json({ message: 'Se eliminó el tipo de envío' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  obtenerTiposE,
   crearq0,
  crearTipoE,
  obtenerTipoEID,
  actualizarTipoE,
  eliminarTipoE
 
};