const express = require('express');
const Customer = require('../model/Customer');
const Authentication = require('../middleware/Authentication');

const router = express.Router();

router.post('/customer', async (req, res) => {
    
    try {
        const dupCustomer = await Customer.findOne({email: req.body.email})
        if(dupCustomer) {
            throw new Error('Email Already Taken!') 
        }
        const customer = new Customer(req.body);
        await customer.save();
        await customer.generateAuthTokens()
        const token = customer.tokens[0]
        //console.log(customer);
        res.status(200).send(token)
    } catch (error) {
            console.log('error', error);
            res.send(error.message)
    }
})

router.post('/customer/login/email', async (req, res) => {
    try {
        const customer = await Customer.findOne({email: req.body.email}) 
        if(!customer) { 
            throw new Error('Email not found!')
        }
        res.send(customer)
    } catch (error) {
        res.send(error.message)
    }
})

router.post('/customer/login', async (req, res) => {
    try {
        const customer = await Customer.findCustomerByCredentials(req.body.email, req.body.password)
        const token = await customer.generateAuthTokens()
        res.send(customer)
    } catch (error) {
        res.send(error.message)
    }
})

router.patch('/customer/logout',Authentication,  async (req, res) => {
    try {
        const customer = await Customer.findById(req.customer._id);
        //console.log('customer before', customer.tokens);
        // customer.tokens.pop();
        const removeToken = customer.tokens.filter( item => {
            return item._id.toString() !== req.body.tokenId.toString()
        });
        //console.log('removeToken', removeToken)
        const newcustomer = await Customer.findByIdAndUpdate(req.customer._id, { tokens: removeToken }) 
        //console.log('customer after', newcustomer);
        res.send(newcustomer)
    } catch (error) {
        res.send(error.message)
    }
})
module.exports = router