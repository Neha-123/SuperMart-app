const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const uniqueValidator = require('mongoose-unique-validator');

customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter Name'],
        trim: true
    },
    mobile: {
        type: String,
        required: [true, 'Enter Mobile No'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Enter Email Id'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Enter Password'],
        trim: true
    },
    tokens: [{
        token: {
            type: String,
            required: [true, 'Token Required']
        }
    }]
}, {
    timestamps: true
})



customerSchema.virtual('basket', {
    ref:'Basket',
    localField: '_id',
    foreignField: 'customer_id'
})



customerSchema.methods.generateAuthTokens = async function () {
    const customer = this;
    const token = jwt.sign({_id: customer._id.toString()}, process.env.JWT_SECRET);
    customer.tokens = customer.tokens.concat({token});
    await customer.save();
    return token
}

customerSchema.pre('save', async function(next) {
    const customer = this;
    if(customer.isModified('password')) {
        customer.password = await bcrypt.hash(customer.password, 8)
    }
    next()
})



customerSchema.statics.findCustomerByCredentials = async (email, password) => {
    const customer = await Customer.findOne({email}) 
    const isMatched = await bcrypt.compare(password, customer.password) 
    if(!isMatched) {
        throw new Error('Incorrect Password')
    };
    return customer;
}


const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer