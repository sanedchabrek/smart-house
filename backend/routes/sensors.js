const express = require('express');
const Sensor = require('../models/Sensor');

const router = express.Router();

// Get all sensors
router.get('/', async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get sensor by ID
router.get('/:id', async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.id);
    if (!sensor) return res.status(404).json({ error: 'Sensor not found' });
    res.json(sensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create sensor
router.post('/', async (req, res) => {
  try {
    const sensor = new Sensor(req.body);
    await sensor.save();
    res.status(201).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update sensor
router.put('/:id', async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sensor) return res.status(404).json({ error: 'Sensor not found' });
    res.json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete sensor
router.delete('/:id', async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndDelete(req.params.id);
    if (!sensor) return res.status(404).json({ error: 'Sensor not found' });
    res.json({ message: 'Sensor deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;