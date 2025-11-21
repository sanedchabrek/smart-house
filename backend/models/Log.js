const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  event: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device' },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);