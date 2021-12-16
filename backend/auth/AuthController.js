const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const app = express();
// For parsing form
const bodyParser = require('body-parser');
// For generating Token
const jwt = require('jsonwebtoken');
// For encrypting Password
const bcrypt = require('bcryptjs');
// For Secert Token
const config = require('../config');
// For User Schema
const User = require('../user/User');
const session = require('express-session');


router.use(session({
  secret: 'edurekaSecert1',
  resave: false,
  saveUninitialized: true
}));


router.use(bodyParser.urlencoded({
  extended: false
}));
router.use(bodyParser.json());


router.post('/register', function (req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
    profileImage: '',// creating a dummy image
    address: { /// creating a empty address
      type: Object,
      default: {}
    }
  }, function (err, user) {
    if (err) {
      return res.status(500).send("There was a problem registering the user.")
    } else {
      const token = jwt.sign({
        id: user._id
      }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.send({ status: "success", message: "user created successfully" })
    }

  })
  // Login User
  router.post('/login', function (req, res) {
    User.findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      const string = encodeURIComponent('! Please enter valid value');
      if (!user) {
        return res.status(500).send("server error occured")
      } else {
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({
          auth: false,
          token: null
        });
        var token = jwt.sign({
          id: user._id
        }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        localStorage.setItem('authtoken', token)
        return res.send({
          status: "success",
          message: "user logged in successfully",
          accessToken: token,
          email: user.email,
          userrole: user.userrole
        })
      }
    });
  });
})

// Info of logined User
router.get('/loginedUser', function (req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({
    auth: false,
    message: 'No token provided.'
  });

  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) return res.status(500).send({
      auth: false,
      message: 'Failed to authenticate token.'
    });

    // res.status(200).send(decoded);
    User.findById(decoded.id, {
      password: 0
    }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");

      res.status(200).send(user);
    });
  });
});

module.exports = router;
