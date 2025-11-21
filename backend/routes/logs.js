const express = require('express');
const Log = require('../models/Log');

const router = express.Router();

// Get all logs
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find().populate('userId deviceId');
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get log by ID
router.get('/:id', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id).populate('userId deviceId');
    if (!log) return res.status(404).json({ error: 'Log not found' });
    res.json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create log
router.post('/', async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update log
router.put('/:id', async (req, res) => {
  try {
    const log = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!log) return res.status(404).json({ error: 'Log not found' });
    res.json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete log
router.delete('/:id', async (req, res) => {
  try {
    const log = await Log.findByIdAndDelete(req.params.id);
    if (!log) return res.status(404).json({ error: 'Log not found' });
    res.json({ message: 'Log deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;