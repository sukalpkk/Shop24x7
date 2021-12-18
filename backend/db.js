const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shop24x7');
mongoose.connect('mongodb://localhost:27017/shop24x7',{
    useNewUrlParser: true,   
    useUnifiedTopology: true
  });
