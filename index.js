const express = require('express');
const product  = require('./src/modals/product.modal')
const app = express();
const productController = require('./src/router/products.controller')

//defining port
require('dotenv').config();
const port = process.env.PORT || 1234;

app.use('/',productController)


app.use(express.json());

 const mongoose = require('mongoose')

const connect =  mongoose.connect('mongodb://127.0.0.1:27017/amazon');

app.listen(port, async() => {
    await connect;
    console.log('connect succesfully')
})
