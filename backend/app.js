const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');
app.use(cors())
const UserController = require('./user/UserController');
app.use('/users', UserController);

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

var productsRouter = require('./routers/adminProduct_routes');
app.use('/products', productsRouter);

module.exports = app;