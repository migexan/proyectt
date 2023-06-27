const express = require("express");
const userSchema = require('../models/user');

const router = express.Router();

// Ruta para crear Usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Ruta para Todos  los Usuarios

router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Ruta para Un solo Usuario en Especifico

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Ruta para Actualizar un Usuario

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { Nombre, Apellido, Edad, CorreoInstitucional } = req.body;
    userSchema
    .updateOne({_id: id}, {$set: {Nombre, Apellido, Edad, CorreoInstitucional}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Ruta para Eliminar un Usuario

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});


module.exports = router;