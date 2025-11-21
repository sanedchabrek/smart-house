const express = require('express');
const Device = require('../models/Device');

const router = express.Router();

// Get all devices
router.get('/', async (req, res) => {
  try {
    const devices = await Device.find().populate('userId');
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get device by ID
router.get('/:id', async (req, res) => {
  try {
    const device = await Device.findById(req.params.id).populate('userId');
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.json(device);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create device
router.post('/', async (req, res) => {
  try {
    const device = new Device(req.body);
    await device.save();
    res.status(201).json(device);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update device
router.put('/:id', async (req, res) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.json(device);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete device
router.delete('/:id', async (req, res) => {
  try {
    const device = await Device.findByIdAndDelete(req.params.id);
    if (!device) return res.status(404).json({ error: 'Device not found' });
    res.json({ message: 'Device deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;