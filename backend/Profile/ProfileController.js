const express = require('express');
const router = express.Router();


// for form data
const bodyParser = require('body-parser');


// for auth
const LocalStorage = require('node-localstorage').LocalStorage;
//const config = require('../config.js');
//const jwt = require('jsonwebtoken');
localStorage = new LocalStorage('./scratch');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const User = require('./Profile');


// profile


router.get('/logout', (req,res) => {
    localStorage.removeItem('authtoken');
    res.redirect('/');
})

module.exports = router;