const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    chapterURL: {
        type: String,
        required: true,
    },
    pageNumber: {
        type: Number,
        required: true,
    }
})
module.exports = mongoose.model('chapter', chapterSchema)