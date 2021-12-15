const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
    productname:{type:String},
    department:{type:String},
    price:{type:String},
    discountprice:{type:String},
    productimage:{type:String},
    productdescription:{type:String},
    checkbox:{type:String},
})

module.exports = mongoose.model('product',productModel)