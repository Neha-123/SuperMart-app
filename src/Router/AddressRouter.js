const express = require('express');
const Authentication = require('../middleware/Authentication');
const Address = require('../model/Address')
const router = new express.Router();

router.post('/saveaddress', Authentication, async (req, res) => {
    //console.log('save address >>>', req.body)
    try {
       let newitem = {
                ...req.body,
                customer_id: req.customer._id
            }
        const address = new Address(newitem);
        await address.save();
        res.status(201).send(address)
    } catch (error) {
        res.status(500).send(error.message)
    }
})


router.get('/getaddress', Authentication, async (req, res) => {
    //console.log('get address >>>', req.body)
    try {
        const address = await  Address.find({customer_id: req.customer._id});
        res.status(201).send(address)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router