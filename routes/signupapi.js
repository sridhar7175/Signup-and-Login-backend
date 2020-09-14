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
    //var hashedPassword=bcrypt.hashSync(req.body.password, 8);
    //req.body.password=hashedPassword;
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

router.get("/signin", (req, res) => {
  signupData.Signup.find()
    .then((signups) => {
      res.status(200).send(signups);
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
 
  // .post((req, res) => {
  //   var newProduct = new signupData.Product(req.body);
  //   newProduct
  //     .save()
  //     .then((product) => {
  //       res.status(200).send(product);
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err);
  //     });
  // });

router.post('/product',(req,res)=>{
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with image",
      });
    }
    //des

    const {
      productName,
      productBrand,
      productDescription,
      productPrice,
    } = fields;
    if (!productName || !productBrand || !productDescription || !productPrice ) {
      return res.status(400).json({
        error: "please Includes all fields",
      });
    }

    //todo
    let product = new signupData.Product(fields);

    //handle
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "file size too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //save
    product.save((err, product) => {
      if (err) {
        res.status(400).json({
          error: "Saving Tshirt in Db Failed",
        });
      }
      res.json(product);
    });
  });
})

router
  .route("/product/:id")
 .get((req,res)=>{
  var id = req.params.id;
  signupData.Product.find({ _id: id })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
 })
  .put((req, res) => {
    var id = req.params.id;
    signupData.Product.findByIdAndUpdate(id, req.body, { new: true })
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  })
  .delete((req, res) => {
    var id = req.params.id;
    signupData.Product.findByIdAndDelete({ _id: id })
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

//Searching for a student
router.get("/search/:productName", (req, res) => {
  var regex = new RegExp(req.params.productName, "i");
  signupData.Product.find({ productName: regex }).then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
