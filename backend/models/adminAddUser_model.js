const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    register_first_name:{type:String},
    register_last_name:{type:String},
    register_email:{type:String},
    register_password:{type:String}
});
mongoose.model('User', userSchema);
module.exports = mongoose.model('User');