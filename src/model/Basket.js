const mongoose = require('mongoose');

basketSchema = mongoose.Schema({
    price : {
        type: Number,
        required: [true, 'Enter Price'],
    },
    quantity : {
        type: Number,
        required: [true, 'Enter Quantity']
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'product id is required'],
        ref: 'Product'
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'customer Id Missing'],
        ref:'Customer'
    }
}, {
    timestamps: true
})
const Basket = mongoose.model('Basket', basketSchema);
module.exports = Basket;

