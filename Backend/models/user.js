// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String, // Use encryption for real applications
    role: { type: String, default: "admin" },
});

module.exports = mongoose.model("User", userSchema);
