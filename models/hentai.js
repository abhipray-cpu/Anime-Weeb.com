const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hentaiSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    //this will be comma seprated values
    tags: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('hentai', hentaiSchema)