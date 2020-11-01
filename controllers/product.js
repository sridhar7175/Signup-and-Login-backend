var productData = require("../models/product");
const multer = require("multer");
const shortid = require("shortid");

exports.getproduct = (req, res) => {
  productData.Product.find()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.createproduct = (req, res) => {
  // res.status(200).json({
  //   file:req.file,body:req.body
  // })
  const {
    productName,
    productBrand,
    productDescription,
    productPrice,
  } = req.body;

  let productPicture = [];

  if (req.files.length > 0) {
    productPicture = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new productData.Product({
    productName: productName,
    productBrand,
    productDescription,
    productPrice,
    productPicture,
  });
  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({
        product,
      });
    }
  });
};

//Get Id
exports.getoneproduct = (req, res) => {
  var id = req.params.id;
  productData.Product.find({ _id: id })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Id

exports.updateproduct = (req, res) => {
  console.log(req.body);
  console.log(req.files);
  const id = req.params.id;

  const {
    productName,
    productBrand,
    productDescription,
    productPrice,
  } = req.body;

  let productPicture = [];

  if (req.files.length > 0) {
    productPicture = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  productData.Product.findOneAndUpdate(
    id,
    {
      $set: {
        productName,
        productBrand,
        productDescription,
        productPrice,
        productPicture,
      },
    },
    { new: true }
  )
    .then((post) => {
      res.status(200).send(post);
    })
    .catch((err) => {
      res.status(500).send(err);
    });

  // var id = req.params.id;
  // console.log(id);
  // //console.log(product);
  // productData.Product.findByIdAndUpdate(id, req.body, { new: true })
  //   .then((products) => {
  //     res.status(200).send(products);
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
};

exports.deleteproduct = (req, res) => {
  var id = req.params.id;
  productData.Product.findByIdAndDelete({ _id: id })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.getproductsort = (req, res) => {
  productData.Product.find()
    .sort({ key: 1 })
    .then((products) => {
      res.status(200).send(products);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//Searching for a ProductName
// router.get("/search/:productName", (req, res) => {
//   var regex = new RegExp(req.params.productName, "i");
//   signupData.Product.find({ productName: regex }).then((result) => {
//     res.status(200).json(result);
//   });
// });
exports.getSearch = (req, res) => {
  var regex = new RegExp(req.params.productName, "i");
  productData.Product.find({ productName: regex })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
