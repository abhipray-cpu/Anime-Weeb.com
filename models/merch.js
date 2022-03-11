const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    //these will be comma seprated values
    tags: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('merch', merchSchema)