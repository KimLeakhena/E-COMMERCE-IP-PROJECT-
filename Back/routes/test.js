const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: String,
    createdAt: { type: Date, default: Date.now }
});

const TestModel = mongoose.model('Test', testSchema);

router.get('/', async (req, res) => {
    try {
        const test = new TestModel({ name: 'Hello from Test Route' });
        await test.save();
        res.json({ success: true, data: test });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
