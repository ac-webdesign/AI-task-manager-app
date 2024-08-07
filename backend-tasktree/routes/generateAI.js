const express = require('express');
const router = express.Router();
const { GenerateAI } = require('../models/models'); // Import the GenerateAI model

// Create a new GenerateAI entry
router.post('/', async (req, res) => {
    try {
        const newGenerateAI = new GenerateAI(req.body);
        const savedGenerateAI = await newGenerateAI.save();
        res.status(201).json(savedGenerateAI);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all GenerateAI entries
router.get('/', async (req, res) => {
    try {
        const generateAIEntries = await GenerateAI.find();
        res.status(200).json(generateAIEntries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific GenerateAI entry by ID
router.get('/:id', async (req, res) => {
    try {
        const generateAIEntry = await GenerateAI.findById(req.params.id);
        if (!generateAIEntry) {
            return res.status(404).json({ error: 'GenerateAI entry not found' });
        }
        res.status(200).json(generateAIEntry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a GenerateAI entry by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedGenerateAI = await GenerateAI.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedGenerateAI) {
            return res.status(404).json({ error: 'GenerateAI entry not found' });
        }
        res.status(200).json(updatedGenerateAI);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a GenerateAI entry by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedGenerateAI = await GenerateAI.findByIdAndDelete(req.params.id);
        if (!deletedGenerateAI) {
            return res.status(404).json({ error: 'GenerateAI entry not found' });
        }
        res.status(200).json({ message: 'GenerateAI entry deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
