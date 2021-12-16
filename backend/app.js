const express = require('express');
const app = express();
const db = require('./db');
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
let mongoosedb = mongoose.connect('mongodb://127.0.0.1:27017/shop24x7database');
const profileModel = require('./models/profile_model');
const profileRoutes = require('./routers/profile_routes')
const productRoute = require('./routers/adminProduct_routes')
const cors = require('cors')

const profileRoutes = require('./routers/profile_routes')
const productRoute = require('./routers/adminProduct_routes')
const UserController = require('./user/UserController');
const AuthController = require('./auth/AuthController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/product',productRoute)
app.use('/users', UserController);
app.use('/api/auth', AuthController);

app.use(cors())


app.listen(8080, function () {
    console.log("server started in Port 8080")
})
