const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const profileModel = new Schema({
    name:{type:String, required : true},
    email:{type:String},
    address:{type:String},
    designation:{type:String},

    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    profileImage:{type:String},
    phone:{type:String},
    interests:{type:String},
    address:{type:{
        streetAddress:{type:String},
        city:{type:String},
        state:{type:String},
        zipcode:{type:String}
    }},
})


const productModel = new Schema({
    productname:{type:String},
    department:{type:String},
    price:{type:String},
    discountprice:{type:String},
    productimage:{type:String},
    productdescription:{type:String},
    checkbox:{type:String},
})

module.exports = mongoose.model('employee',profileModel)