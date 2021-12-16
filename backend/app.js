const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');
app.use(cors())
const ProfileController = require('./profile/ProfileController');
app.use('/users', ProfileController);

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;