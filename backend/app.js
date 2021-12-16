const express = require('express');
const app = express();
const db = require('./db');
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
let mongoosedb = mongoose.connect('mongodb://127.0.0.1:27017/shop24x7database');
const profileModel = require('./models/profile_model');
const profileRoutes = require('./routers/profile_routes')
const productRoute = require('./routers/adminProduct_routes')
const cors = require('cors')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/product',productRoute)
app.use(cors())


const UserController = require('./user/UserController');
app.use('/users', UserController);

const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

module.exports = app;






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
    console.log("server started in Port 3600")
})

