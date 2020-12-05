const mongoose = require('mongoose');

addressSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Name is required'],
    },
    mobile : {
        type: Number,
        required: [true, 'Enter mobile']
    },
    flat : {
        type: String,
        required: [true, 'Enter flat']
    },
    area : {
        type: String,
    },
    city : {
        type: String,
        required: [true, 'city is required'],
    },
    country : {
        type: String,
        required: [true, 'country is required'],
    },
    state : {
        type: String,
        required: [true, 'state is required'],
    },
    pin : {
        type: Number,
        required: [true, 'pin mobile']
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'customer Id Missing'],
        ref:'Customer'
    }
}, {
    timestamps: true
})
const Address = mongoose.model('Address', addressSchema);
module.exports = Address;

