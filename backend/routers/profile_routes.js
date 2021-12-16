
const express = require('express')
const router = express.Router();
const employeeModel = require('../models/profile_model.js');

router.get('/', (req, res) => {
    employeeModel.find((err, result) => {
        if (err) { throw err; }
        else {
            res.render('profile.ejs', { profiles: result })
        }
    })

})




router.post('/addProfile', (req, res) => {
    employeeModel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            //res.redirect('/profile')
        }
    })
})

router.post('/updateProfile', (req, res) => {
    employeeModel.findOneAndUpdate({ name: req.body.name }, {
        $set: { address: req.body.address}
    }, { upsert: true }
        , (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('updated the profiles in  database')
                //res.redirect('/profile')
            }
        })
})

router.post('/deleteProfile', (req, res) => {
    employeeModel.findOneAndDelete({ name: req.body.name }, (err, result) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('deleted the profiles in  database')
                //res.redirect('/profile')
            }
        })
})


module.exports = router;

