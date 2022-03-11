const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AmvSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    duration: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
        unique: true,
    },
    tags: [{
        type: String,
        required: true,
    }],
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('amv', AmvSchema)