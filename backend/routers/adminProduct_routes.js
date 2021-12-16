const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const bodyParser = require('body-parser');
const Products = require('../models/product_model');
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

router.post('/addProduct', function(req, res) {
  Products.create({
    productname: req.body.productname,
    department: req.body.department,
    price: req.body.price,
    discountprice: req.body.discountprice,
    productimage:req.body.productimage,
    productdescription: req.body.productdescription,
    checkbox:req.body.checkbox
  },
    function(err, user) {
      if (err) return res.status(500).send("There was a problem Adding the Product.")
      // create a token
      res.send({
        status:"success",
        message: "Product Added successfully"
      })
    });
});

router.get('/getproducts', function(req, res) {
  Products.find((err,products)=>{
    if(err) throw err;
  res.send(products);
},
function(err, user) {
  if (err) return res.status(500).send("There was a problem Getting All Products.")
      // create a token
      res.send({
        status:"success",
        message: "Product Added successfully"
      })
    });
});


module.exports= router;