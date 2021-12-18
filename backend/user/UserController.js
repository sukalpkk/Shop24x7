const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const LocalStorage = require('node-localstorage').LocalStorage;
const config = require('../config.js');
const jwt = require('jsonwebtoken');
localStorage = new LocalStorage('./scratch');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('./User');


router.post('/profileDetails', function (req, res) {
    var token = localStorage.getItem('authtoken')

    if (!token) {
        return res.status(401).send('unauthorized');
    }
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(401).send('unauthorized');
        };
        console.log(req.body.email)
        User.find({
            email: req.body.email,
        }, function (err, data) {
            if (err) return res.status(500).send("There was a problem retreving  the user profile info.")
            // create a token
          
            const profileInfo ={
                firstname:data[0].firstName,
                lastname:data[0].lastName,
                email:data[0].email ,
                phone:data[0].phone ,
                address:data[0].address ,
                profileImage:data[0].profileImage ,
                interests:data[0].interests 
            }
            res.send({
                status: "success",
                data:profileInfo 
            })
        });
    })
});


router.post('/profile', function (req, res) {
    var token = localStorage.getItem('authtoken')

    if (!token) {
        return res.status(401).send('unauthorized');
    }
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(401).send('unauthorized');
        };
        User.findOneAndUpdate({
            email: req.body.email,
        }, {
            $set: {
                firstname: req.body.firstName,
                lastname: req.body.lastName,
                email: req.body.email,
                profileImage: req.body.profileImage,
                interests: req.body.interests,
                address: req.body.address
            }

        }, function (err, data) {
            if (err) return res.status(500).send("There was a problem retreving  the user profile info.")
            // create a token
            res.send({
                status: "success",
                message: "user profile updated/created successfully"
            })
        });
    })
});


router.post('/profile/image', function (req, res) {
    var token = localStorage.getItem('authtoken')

    if (!token) {
        return res.status(401).send('unauthorized');
    }
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(401).send('unauthorized');
        };
        User.findOneAndUpdate({
            email: req.body.email,
        }, {
            $set: {
                profileImage: req.body.profileImage,
            }

        }, function (err, data) {
            if (err) return res.status(500).send("There was a problem retreving  the user profile info.")
            // create a token
            res.send({
                status: "success",
                message: "user profile image updated successfully"
            })
        });
    })
});


router.post('/profile/address', function (req, res) {
    var token = localStorage.getItem('authtoken')

    if (!token) {
        return res.status(401).send('unauthorized');
    }
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(401).send('unauthorized');
        };
        User.findOneAndUpdate({
            email: req.body.email,
        }, {
            $set: {
                address: req.body.address
            }

        }, function (err, data) {
            if (err) return res.status(500).send("There was a problem retreving  the user profile info.")
            // create a token
            res.send({
                status: "success",
                message: "user profile address updated successfully"
            })
        });
    })
});

module.exports = router;