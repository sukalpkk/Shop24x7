
//creating interface 
const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  phone:String,
  interests:String,
  profileImage: String,
  address:Object,
  userrole:String
});
mongoose.model('Users', UserSchema);

module.exports = mongoose.model('Users');