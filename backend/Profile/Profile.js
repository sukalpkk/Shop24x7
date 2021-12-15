const mongoose = require('mongoose');
const Schema = mongoose.schema;



const profileModel =  mongoose.Schema({
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

module.exports = mongoose.model('Profile',profileModel)