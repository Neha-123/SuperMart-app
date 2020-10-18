const express = require('express');
const Basket = require('../model/Basket');
const { findByIdAndUpdate } = require('../model/Product');
const Product = require('../model/Product');
const Authentication = require('../middleware/Authentication');
const router = express.Router();

//Adding Product to cart
router.post('/cart', Authentication, async (req, res) => {
    //console.log('addto Cart', req.customer._id)
    try {
        let basket = await Basket.findOne({ product_id: req.body.product._id, customer_id: req.customer._id });
        if (basket) {
            basket.quantity = basket.quantity + 1;
        } else {
            newitem = {
                price: req.body.product.price,
                quantity: 1,
                product_id: req.body.product._id,
                customer_id: req.customer._id
            }
            basket = new Basket(newitem);
        }

        await basket.save();
        const modifiedBasket = await Basket.find({customer_id: req.customer._id});
        res.status(201).send(modifiedBasket)
    } catch (error) {
        res.status(500).send(error.message)
    }



})

//Fetching all products from cart
router.get('/cart', Authentication, async (req, res) => {
    //console.log('Fetch cart', req.customer._id)
    try {
        const basketDb = await Basket.find({customer_id: req.customer._id});
        const basket = await Promise.all(basketDb.map(async (element) => {
            const product = await element.populate('product_id').execPopulate();
            //console.log('product', product);
            return {
                _id: product._id,
                product_id: product.product_id._id,
                price: product.price,
                quantity: product.quantity,
                productName: product.product_id.productName,
                productImage: product.product_id.productImage
            }
        })
        );

        res.status(201).send(basket)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//update Quantity
router.patch('/cart/:id', Authentication, async (req, res) => {
    try {
        const basket = await Basket.findByIdAndUpdate(req.params.id, { quantity: req.body.quantity })
        res.status(201).send(basket)
    } catch (error) {
        res.status(500).send(error.message)
    }

})

router.delete('/cart/:id', Authentication,  (req, res) => {

    Basket.findByIdAndDelete(req.params.id)
        .then((basket) => {
            res.status(201).send(basket)

        }).catch = (error) => {
            res.status(500).send(error.message)
        }


})


module.exports = router;