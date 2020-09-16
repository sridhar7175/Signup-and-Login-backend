var express = require("express");
var router = express.Router();
var signupData = require("../models/Signupdata");
var bcrypt = require("bcryptjs");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
router
  .route("/signup")
  .get((req, res) => {
    signupData.Signup.find()
      .then((signups) => {
        res.status(200).send(signups);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .post((req, res) => {
    //encrypt password before save
    var hashedPassword=bcrypt.hashSync(req.body.password, 8);
    req.body.password=hashedPassword;
    var newsignup = new signupData.Signup(req.body);
    newsignup
      .save()
      .then((signup) => {
        res.status(200).send(signup);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });



//Products Apis
router.get("/product", (req, res) => {
  signupData.Product.find()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/product", (req, res) => {
 
});

router
  .route("/product/:id")
  .get((req, res) => {
    
  })
  .put((req, res) => {
    
  })
  .delete((req, res) => {
    
  });
  

//Searching for a student
router.get("/search/:productName", (req, res) => {
  var regex = new RegExp(req.params.productName, "i");
  signupData.Product.find({ productName: regex }).then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
