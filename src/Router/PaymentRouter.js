const express = require('express');
const stripe = require('stripe')('sk_test_51Hj4isKVGo7SPROsTHztnxC98uSFS7e8k4wXpHE1Emef64uKrKVaKvethN3t3d7Pd2MYjZwOCBgoJ6Z12cotD2x900FGhN6rOl');
const Authentication = require('../middleware/Authentication');
const Basket = require('../model/Basket');
const Order = require('../model/Order')
const router = new express.Router();

router.post('/payments', async(req, res) => {
    const total = req.body.total;
    //console.log("Payment request received >>>>", total);
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "INR"
        })
        res.status(201).send({clientSecret: paymentIntent.client_secret})
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/orders', Authentication, async (req, res) => {
    const data = req.body.basket;
    //console.log("data >>>", data)
    try {
         const orders = data.map( element => {
            return { 
                orderId: req.body.orderId,
                customer_id:  req.customer._id,
                product_id: element.product_id,
                productImage: element.productImage,
                productName: element.productName,
                quantity: element.quantity,
                price: element.price,
                sumTotal: req.body.total,
                deliveryAddress: req.body.deliveryAddress
                
            }
        })
        //console.log("Orders >>>>", orders)
        const response = await Order.insertMany(orders);
        const basket = await Basket.deleteMany({customer_id: req.customer._id});
        //console.log("deleted Basket >>>>", basket)
        res.status(201).send(response)
    } catch (error) {
        res.status(400).send(error.message)
    }

})

router.get('/orders', Authentication, async (req, res) => {
    try {
        //const orderDb = await Order.find({customer_id: req.customer._id});

        const orderDb = await Order.aggregate(
            [
            {$match: { "customer_id": req.customer._id }},
              {
                $group: {
                  _id: { orderId: "$orderId" },
                  totalQuantity: {
                    $sum: "$quantity"
                  },
                totalAmount: { $addToSet: "$sumTotal"}
                }
              }
            ])
        res.status(201).send(orderDb)
        //console.log('orderDb >>>>', orderDb)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.get('/ordersdetails/:id', Authentication, async (req, res) => {
    try {
        //console.log(decodeURIComponent(req.params.id));
       // const convertedDate = new Date(decodeURIComponent(req.params.id))
       // console.log('convertedDate >>>>', convertedDate)
        const orderDb = await Order.find({customer_id: req.customer._id, orderId: req.params.id});
        res.status(201).send(orderDb);
        console.log('orderDb >>>>', orderDb)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = router