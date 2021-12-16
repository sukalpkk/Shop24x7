const express = require('express')
const router = express.Router();

const productModel = require('../models/product_model');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  
router.post('/save',productController.saveProduct);

router.get('/products', productController.getAllProducts);


router.get('/products/:id', productController.getProductById);

router.delete('/delete/:id', productController.deleteProduct);

router.put('/update/:id', productController.updateProduct);


router.post('/edit/:id', productController.editProduct);

module.exports= router;