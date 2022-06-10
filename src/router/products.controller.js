const {Router} = require('express');
const router = Router();
const product = require('../modals/product.modal')


router.get('/products', async(req,res) => {
    const products = await product.find({}).limit(10);
    res.json(products)
 })


module.exports = router