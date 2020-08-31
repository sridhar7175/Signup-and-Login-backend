var express = require("express");
var router = express.Router();
var signupData = require("../models/Signupdata");

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

router.post("/signin", (req, res) => {
  signupData.Signup.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((sign) => {
      if (sign) {
        res.status(200).send(sign);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//Products Apis

router
  .route("/product")
  .get((req, res) => {
    signupData.Product.find()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .post((req, res) => {
    var newProduct = new signupData.Product(req.body);
    newProduct
      .save()
      .then((product) => {
        res.status(200).send(product);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

module.exports = router;
