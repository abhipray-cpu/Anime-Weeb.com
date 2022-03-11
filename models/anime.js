const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    },
    VIDEOS: [{
        type: mongoose.Types.ObjectId,
        ref: 'video'
    }, { collection: 'videos' }]
})

module.exports = mongoose.model('anime', animeSchema);