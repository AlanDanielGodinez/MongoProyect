const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/envio');

// Rutas CRUD de Envíos

// Obtener todos los envíos
router.get('/', obtenerEnvios);

// Obtener un envío por su ID
router.get('/id/:_idE', obtenerEnvioID);

// Crear un nuevo envío
router.post('/', crearEnvio);

// Actualizar un envío por su ID
router.put('/id/:_idE', actualizarEnvio);

// Eliminar un envío por su ID
router.delete('/id/:_idE', eliminarEnvio);

// Crear envíos masivos
router.post('/bulk', crearEnviosMasivos);

// Filtros Personalizados de Envíos

// Obtener envíos por origen y estatus 'transito'
router.get('/origen/:origenE/estatus/transito', getQ2);

// Obtener envíos por tipo
router.get('/tipo/:tipoE', getQ3);

// Obtener envíos por cliente
router.get('/cliente/:clienteE', getQ4);

// Obtener envíos por origen
router.get('/origen/:origenE', getQ5);

// Obtener envíos por estatus
router.get('/estatus/:estatusE', getQ6);

// Obtener envíos por origen y tipo 'tE03'
router.get('/origen/:origenE/tipo/tE03', getQ8);

module.exports = router;
