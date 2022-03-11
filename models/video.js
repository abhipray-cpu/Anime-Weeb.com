const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,

    },
    videoURL: {
        type: String,
        required: true,
    },
    ANIME: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('video', videoSchema);