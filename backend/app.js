const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
let mongoosedb = mongoose.connect('mongodb://127.0.0.1:27017/shop24x7database');
const profileModel = require('./models/profile_model');

const profileRoutes = require('./routers/profile_routes')
const productRoute = require('./routers/adminProduct_routes')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/product',productRoute)

app.get('/', (req, res) => {
    profileModel.find((err,result)=>{
        if (err) { throw err; }
        else{
            res.render('index.ejs', {profiles: result})
        }
    })
  
})


app.post('/addProfile', (req, res) => {
    profileModel.create(req.body, (err, results) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('saved to database')
            res.redirect('/')
        }
    })
})

app.listen(8080, function () {
    console.log("server started in Port 8080")
})