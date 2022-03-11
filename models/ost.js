const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    //this will be comma seprated value
    tag: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ost', ostSchema)