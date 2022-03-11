const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    orderTotal: {
        type: Number,
        required: true,
    },
    // for these two the index should be same for quantity and products for the same product
    quantity: [{
        type: Number,
        required: true,
    }],
    product: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'merch'
    }, { container: 'merches' }]
})
module.exports = mongoose.model('order', orderSchema)