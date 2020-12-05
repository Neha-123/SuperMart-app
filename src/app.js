const express = require('express');
const path = require('path');
require('./db/mongoose');
const ProductRouter = require('./Router/ProductRouter');
const BasketRouter = require('./Router/BasketRouter');
const CustomerRouter = require('./Router/CustomerRouter');
const PaymentRouter = require('./Router/PaymentRouter');
const AddressRouter = require('./Router/AddressRouter');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})
app.get('/checkout', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})
app.use(ProductRouter);
app.use(BasketRouter);
app.use(CustomerRouter);
app.use(PaymentRouter);
app.use(AddressRouter);
module.exports = app;
