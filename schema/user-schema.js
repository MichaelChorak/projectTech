const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    naam: String,
    leeftijd: Number,
    email: String,
    provincie: String,
    favspel: String
});

module.exports = mongoose.model('users', userSchema);
