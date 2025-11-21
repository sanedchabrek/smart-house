const express = require('express');
const Automation = require('../models/Automation');

const router = express.Router();

// Get all automations
router.get('/', async (req, res) => {
  try {
    const automations = await Automation.find().populate('userId');
    res.json(automations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get automation by ID
router.get('/:id', async (req, res) => {
  try {
    const automation = await Automation.findById(req.params.id).populate('userId');
    if (!automation) return res.status(404).json({ error: 'Automation not found' });
    res.json(automation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create automation
router.post('/', async (req, res) => {
  try {
    const automation = new Automation(req.body);
    await automation.save();
    res.status(201).json(automation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update automation
router.put('/:id', async (req, res) => {
  try {
    const automation = await Automation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!automation) return res.status(404).json({ error: 'Automation not found' });
    res.json(automation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete automation
router.delete('/:id', async (req, res) => {
  try {
    const automation = await Automation.findByIdAndDelete(req.params.id);
    if (!automation) return res.status(404).json({ error: 'Automation not found' });
    res.json({ message: 'Automation deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;