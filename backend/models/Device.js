const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['light', 'plug', 'ac', 'other'], required: true },
  status: { type: String, default: 'off' },
  location: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Device', deviceSchema);