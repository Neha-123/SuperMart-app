const mongoose = require('mongoose');

orderSchema = mongoose.Schema({
    orderId: {
        type: String,
        required: [true, 'orderId is required'],
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'customer Id Missing']
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'product id is required']
    },
    productImage: {
        type: String,
        required: [true, 'order Image is required'],
    },
    productName: {
        type: String,
        required: [true, 'order Name is required'],
    },
    price : {
        type: Number,
        required: [true, 'Enter Price'],
    },
    quantity : {
        type: Number,
        required: [true, 'Enter Quantity']
    },
    sumTotal: {
        type: Number,
        required: [true, 'Enter Sum Total'],
    },
    deliveryAddress : {
        type: Object,
        required : [true, 'Enter Dellivery Address']
    }
   
}, {
    timestamps: true
})
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
