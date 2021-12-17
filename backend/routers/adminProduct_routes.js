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
    
      res.send({
        status:"success",
        message: "Product Added successfully"
      })
    });
});


router.post('/update', (req, res) => {
  Products.findOneAndUpdate({ _id: req.body.id }, {
      $set: { productname: req.body.productname,
        department: req.body.department,
        price:req.body.price,
        discountprice:req.body.discountprice,
        productimage:req.body.productimage,
        productdescription:req.body.productdescription,
        checkbox:req.body.checkbox}
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
  Products.findOneAndDelete({ _id: req.body._id }, (err, result) => {
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