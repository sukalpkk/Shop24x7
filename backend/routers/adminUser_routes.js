const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bodyParser = require('body-parser');
const Users = require('../models/adminAddUser_model');
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

router.post('/addUser', function(req, res) {
    Users.create({
        register_first_name: req.body.firstName,
        register_last_name: req.body.lastName,
        register_email: req.body.email,
        register_password: req.body.password
    },
      function(err, user) {
        if (err) return res.status(500).send("There was a problem Adding the User.")
        res.send({
          status:"success",
          message: "User Added successfully"
        })
      });
  });

  router.get('/getAllUser', function(req, res) {
    Users.find((err,users)=>{
      if(err) throw err;
    res.send(users);
  },
  function(err, user) {
    if (err) return res.status(500).send("There was a problem Getting All Users.")
      
        res.send({
          status:"success",
          message: "All Users Found Successfully"
        })
      });
  });


  
 
router.post('/update', (req, res) => {
  Users.findOneAndUpdate({ _id: req.body.id }, {
      $set: { register_first_name: req.body.register_first_name,
        register_last_name: req.body.register_last_name,
        register_email: req.body.register_email,
        register_password: req.body.register_password
      }
  },
  function(err, user) {
    if (err) return res.status(500).send("There was a problem Updating the Product.")
      
        res.send({
          status:"success",
          message: "Product Updated successfully"
        })
      });
});

router.post('/delete', (req, res) => {
  Users.findOneAndDelete({ _id: req.body._id }, (err, result) => {
          if (err) {
              return console.log(err);
          } else {
              console.log('deleted the employee in  database')
          }
      },
      function(err, user) {
        if (err) return res.status(500).send("There was a problem Deleting the Product.")
          
            res.send({
              status:"success",
              message: "Product Deleted successfully"
            })
          });
    });
    


  module.exports= router;