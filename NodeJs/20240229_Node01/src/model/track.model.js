const mongoose = require('mongoose');
const trackModel = new mongoose.Schema({
    isrc: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    contributors: {
        type: String,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        trim: true
    },
    lineCYear: {
        type: Number,
        required: true,
        trim: true
    },
    lineCPublish: {
        type: String,
        required: true,
        trim: true
    }
});

const Track = mongoose.model('Classic', trackModel);

module.exports = Track;