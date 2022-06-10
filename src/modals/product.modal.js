const {Schema, model} = require('mongoose');
const ProductSchema  = new Schema({
    title: String,
    rank: String,
    date: String,
    asin: String,
    imageURL: [String],
    imageURLHighRes: [String]
})

const product = model('product', ProductSchema);

module.exports = product