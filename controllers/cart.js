const Cart = require("../models/cart");

exports.getaddItemToCart = (req, res) => {
  console.log("id", req);
  //var id = req.params.id;
  Cart.find()
    .populate("product_id")
    .exec((err, posts) => {
      console.log("Populated User " + posts);
      res.status(200).send(posts);
    });
};

// exports.getaddItemToCart = (req, res) => {
//   console.log("id", req);
//   var id = req.params.id;
//   Cart.findOne({ _id: id })
//     .populate("product_id")
//     .exec((err, posts) => {
//       console.log("Populated User " + posts);
//       res.status(200).send(posts);
//     });
// };

exports.getcartuserid = (req, res) => {
  console.log("id", req);
  //var id = req.params.id;
  Cart.find()
    .populate("signup_id")
    .exec((err, posts) => {
      console.log("Populated User " + posts);
      res.status(200).send(posts);
    });
};

exports.createAddItemToCart = (req, res) => {
  //console.log(req);
  var newCart = new Cart(req.body);
  newCart
    .save()
    .then((cart) => {
      res.status(200).send(cart);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

// exports.getoneaddtocart=(req,res)=>{
//   var id = req.params.id;
//   Cart.find({ _id: id })
//     .then((carts) => {
//       res.status(200).send(carts);
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// }

// //Get Id
exports.deleteAddItemToCart = (req, res) => {
  var id = req.params.id;
  Cart.findByIdAndDelete({ _id: id })
    .then((posts) => {
      res.status(200).send({ posts: posts, status: true });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getalladdtocart = (req, res) => {
  Cart.find()
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
