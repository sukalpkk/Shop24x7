const express = require('express');
const app = express();
const db = require('./db');

const ProfileController = require('./Profile/ProfileController');
app.use('/profile', ProfileController);

// const AuthController = require('./auth/AuthController');
// app.use('/api/auth', AuthController);

module.exports = app;
