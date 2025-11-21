const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['temperature', 'gas', 'motion', 'other'], required: true },
  value: { type: Number },
  unit: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', sensorSchema);