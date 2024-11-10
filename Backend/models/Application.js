// backend/models/Application.js
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    statement: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);