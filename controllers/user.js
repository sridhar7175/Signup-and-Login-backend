var signupData = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  signupData.Signup.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};
