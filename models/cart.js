const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
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
        ref: 'merchendaise'
    }, { container: 'merchs' }]
})
module.exports = mongoose.model('cart', cartSchema)