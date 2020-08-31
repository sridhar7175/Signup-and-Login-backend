var express = require("express");
var router = express.Router();
var registerData = require("../models/Registerdata");
router.route("/").get((req, res) => {
  registerData.Signup.find()
    .then((registers) => {
      res.status(200).send(registers);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
