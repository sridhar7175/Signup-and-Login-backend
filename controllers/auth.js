var bcrypt = require("bcryptjs");
var signupData = require("../models/user");

exports.signup = (req, res) => {
  //encrypt password before save
  // var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  // req.body.password = hashedPassword;
  var newsignup = new signupData.Signup(req.body);
  newsignup
    .save()
    .then((signup) => {
      res.status(200).send(signup);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
exports.signin = (req, res) => {
  signupData.Signup.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((sign) => {
      if (sign) {
        res.status(200).send({ details: sign, status: true });
      } else {
        console.log("failed");
        res.status(404).send({ message: "User not found", status: false });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getUserDetails = (req, res) => {
  signupData.Signup.find()
    .then((userDetails) => {
      res.status(200).send(userDetails);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
// exports.createUserDetails = (req, res) => {
//   var newUserDetails = new signupData.Signup(req.body);
//   newUserDetails
//     .save()
//     .then((userData) => {
//       res.status(200).send(userData);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// };

exports.getOneUserIdDetails = (req, res) => {
  var id = req.params.id;
  signupData.Signup.find({ _id: id })
    .then((userDetail) => {
      res.status(200).send(userDetail);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.updateUserDetails = (req, res) => {
  var id = req.params.id;
  signupData.Signup.findByIdAndUpdate(id, req.body, { new: true })
    .then((userDetail) => {
      res.status(200).send(userDetail);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
