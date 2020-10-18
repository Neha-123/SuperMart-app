const express = require('express');
const Product = require('../model/Product');

const router = new express.Router();

//adding products in db
router.post('/product', (req, res) => {
    const product = new Product(req.body);
    product.save().then(() => {
        res.status(201).send(product)
    }).catch(e => {
        res.status(400).send(e.message)
    })
})

//fetching all the products
router.get('/product', (req, res) => {
    Product.find({}).then(productList => {
        res.status(201).send(productList)
    }).catch(e => {
        res.status(500).send(e.message)
    })
})

module.exports = router