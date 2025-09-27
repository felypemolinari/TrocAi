const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  // posso adicionar mais campos aqui
}, {
  timestamps: true // adiciona automaticamente campos 'createdAt' e 'updatedAt'
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;