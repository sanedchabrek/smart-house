const mongoose = require('mongoose');

const automationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  condition: { type: String, required: true },
  action: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Automation', automationSchema);