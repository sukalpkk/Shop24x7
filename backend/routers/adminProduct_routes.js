const express = require('express')
const router = express.Router();

const productModel = require('../models/product_model');

router.get('/', (req, res) => {
    productModel.find((err, result) => {
        if (err) { throw err; }
        else {
            // res.render('employee.ejs', { employees: result })
        }
    })
})

router.post('/addProduct', (req, res) => {
    productModel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.send(results)
            // res.redirect('/employee')
        }
    })
})

router.post('/editProduct', (req, res) => {
    productModel.findOneAndUpdate({ name: req.body.name }, {
        $set: { address: req.body.address}
    }, { upsert: true }
        , (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('updated')
                // res.redirect('/employee')
            }
        })
})


router.post('/deleteProduct', (req, res) => {
    employeeModel.findOneAndDelete({ name: req.body.name }, (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('deleted')
                // res.redirect('/employee')
            }
        })
})