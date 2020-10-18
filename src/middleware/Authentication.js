const jwt = require('jsonwebtoken');
const Customer = require('../model/Customer');

const Authentication = async (req, res, next ) => {
    try {
        const token = req.header('Authorization');
        console.log('token', token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer = await Customer.findOne({_id: decoded._id, token: decoded.token});
        if(!customer) {
            throw new Error()
        }

        req.customer = customer;
        req.token = token;
        next()
    } catch (error) {
        res.status(401).send({error : 'Please Authenticate.'})
    }
}

module.exports = Authentication
