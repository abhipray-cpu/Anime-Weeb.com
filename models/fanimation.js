const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fanimationSchema = new Schema({
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
    //this will be a comma seprated values
    tags: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('fanimation', fanimationSchema)