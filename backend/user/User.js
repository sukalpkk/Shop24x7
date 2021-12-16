
//creating interface 
const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  firstName: String,
  lastName: String,
  email: String,
  password: String
});
mongoose.model('EduUser', UserSchema);

module.exports = mongoose.model('EduUser');