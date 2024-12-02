// /src/routes/tiposEnvios.js
const express = require('express'); // Framework para construir aplicaciones web y APIs
const router = express.Router(); // Módulo de enrutador de Express

// Importar las funciones del controlador de tipos de envío
const {
  obtenerTiposE,
  crearTipoE,
  crearq0,
  obtenerTipoEID,
  actualizarTipoE,
  eliminarTipoE
} = require('../controllers/tipoEnvio');

// Rutas CRUD para los tipos de envío

// Ruta para obtener todos los tipos de envío
router.get('/', obtenerTiposE);

// Ruta para crear un nuevo tipo de envío
router.post('/', crearTipoE);

// Ruta para crear múltiples tipos de envío (inserción masiva)
router.post('/bulk', crearq0);

// Ruta para obtener un tipo de envío por su ID
router.get('/:idTE', obtenerTipoEID);

// Ruta para actualizar un tipo de envío por su ID
router.put('/:idTE', actualizarTipoE);

// Ruta para eliminar un tipo de envío por su ID
router.delete('/:idTE', eliminarTipoE);

module.exports = router;
