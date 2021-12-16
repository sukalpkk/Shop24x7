const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    productname:{type:String},
    department:{type:String},
    price:{type:String},
    discountprice:{type:String},
    productimage:{type:String},
    productdescription:{type:String},
    checkbox:{type:Boolean},
});
mongoose.model('Products', ProductSchema);
module.exports = mongoose.model('Products');