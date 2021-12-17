const express = require('express');
const app = express();
const db = require('./db');
var cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}));

const UserController = require('./user/UserController');
app.use('/users', UserController);

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

var productsRouter = require('./routers/adminProduct_routes');
app.use('/products', productsRouter);

var adminUserRoute = require('./routers/adminUser_routes');
app.use('/adminUser', adminUserRoute)

module.exports = app;