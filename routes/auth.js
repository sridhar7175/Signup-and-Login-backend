var express = require("express");
var router = express.Router();
var {
  signup,
  signin,
  getUserDetails,
  updateUserDetails,
  getOneUserIdDetails,
} = require("../controllers/auth");
router.post("/signup", signup);
router.post("/signin", signin);

router.get("/getuserdetails", getUserDetails);

//router.post('/createuserdetails',createUserDetails)
router.get("/getoneuserdetails/:id", getOneUserIdDetails);

router.put("/updateuserdetails/:id", updateUserDetails);

module.exports = router;
