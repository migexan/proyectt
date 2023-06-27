const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   Nombres: {
    type: String,
    required: true
   },
   Apellidos: {
    type: String,
    required: true
   },
   Edad: {
    type: Number,
    required: true
   },
   CorreoInstitucional: {
    type: String,
    required: true
   }
});

module.exports = mongoose.model('User', userSchema);