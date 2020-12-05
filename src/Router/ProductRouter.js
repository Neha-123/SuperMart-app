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

router.get('/product/search/:products', async (req, res) => {
        const searchString = req.params.products
        const splitString  = searchString.split(" ")

        const modsplitString = splitString.map(element => {
            return  new RegExp(element,'i')
        });     
        //console.log(searchString, 'searchString')
        //console.log(modsplitString, 'modsplitString')
        let message = ''
        let products = null
    try {
        const productsbyCategory = await Product.find({category: new RegExp(searchString, 'i')})
        const productsbySubCategory = await Product.find({subCategory: new RegExp(searchString, 'i')})
        const productsbyproductName = await Product.find({productName: new RegExp(searchString, 'i')})
        const productsbyproductNameInOperator = await Product.find({productName : { $in : modsplitString}})
        const Allproducts =  await Product.find({}).limit(20)
        if(productsbyCategory.length > 0) {
            products = productsbyCategory
        }
        else if(productsbyCategory.length === 0 && productsbySubCategory.length > 0 ) {
            products = productsbySubCategory
        }
        else if(productsbySubCategory.length === 0 && productsbyCategory.length === 0 && productsbyproductName.length > 0) {
            products = productsbyproductName
        } else if (productsbySubCategory.length === 0 && productsbyCategory.length === 0 && productsbyproductName.length === 0 && productsbyproductNameInOperator.length > 0) {
            products = productsbyproductNameInOperator;
        } else if (productsbySubCategory.length === 0 && productsbyCategory.length === 0 && productsbyproductName.length === 0 && productsbyproductNameInOperator.length === 0) {
            products = Allproducts;
            message ="No Match"
        }
        const result = {
            products,
            message
        }
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
})
module.exports = router