// backend/routes/application.js
const express = require('express');
const Application = require('../models/Application');

const router = express.Router();

// POST /api/applications - save form data to MongoDB
router.post('/', async (req, res) => {
    try {
        const { name, phone, email, statement } = req.body;
        const application = new Application({ name, phone, email, statement });
        await application.save();
        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error saving application:', error);
        res.status(500).json({ message: 'Error saving application' });
    }
});

module.exports = router;
