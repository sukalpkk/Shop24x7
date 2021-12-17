const express = require("express");
const router = express.Router();
const fs = require("fs");
var path = require("path");

router.get("/check", (req, res) => {
  res.end("Welcome to Homepage API");
});

router.get("/banner", (req, res) => {
  var filepath = path.join(__dirname + "/homepagedata/bannerlist.json");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {     
      res.status(403).send({"status":"failure","message": JSON.stringify(err)});
    } else {      
      res.status(200).send({"status":"success","products": JSON.parse(data)});
    }    
  });
});

router.get("/categories", (req, res) => {
  var filepath = path.join(__dirname + "/homepagedata/categories.json");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {     
        res.status(403).send({"status":"failure","message": JSON.stringify(err)});
      } else {      
        res.status(200).send({"status":"success","categories": JSON.parse(data)});
      }  
  });
});

router.get("/products", (req, res) => {
  var filepath = path.join(__dirname + "/homepagedata/products.json");
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {     
        res.status(403).send({"status":"failure","message": JSON.stringify(err)});
      } else {      
        res.status(200).send({"status":"success","products": JSON.parse(data)});
      }  
  });
});

module.exports = router;
