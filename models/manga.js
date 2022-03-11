const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        required: true,
        type: String,
        enum: ['shone', 'etc']

    },
    chapters: [{
        type: mongoose.Types.ObjectId,
        ref: 'chapter',
        required: true
    }, { container: 'chapters' }]
})

module.exports = mongoose.model('manga', mangaSchema)