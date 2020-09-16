var bcrypt = require("bcryptjs");
var signupData = require("../models/user");

exports.signup = (req, res) => {
  //encrypt password before save
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  req.body.password = hashedPassword;
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
        res.status(200).send(sign);
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
