const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : {
        type: String,
        required: [true, 'Enter Product name'],
        trim: true
    },
    productImage : {
        type: String,
        trim: true,
    },
    rating : {
        type: Number
    },
    price : {
        type: Number,
        required: [true, 'Enter Price'],
    },
    quantity : {
        type: Number,
        required: [true, 'Enter Quantity']
    }
}, {
    timestamps: true
})

productSchema.virtual('basket', {
    ref:'Basket',
    localField: '_id',
    foreignField: 'product_id'
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product