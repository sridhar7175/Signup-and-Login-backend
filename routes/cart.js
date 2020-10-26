var express = require("express");
var router = express.Router();
const {
  createAddItemToCart,
  getaddItemToCart,
  //getoneaddtocart,
  deleteAddItemToCart,
  getalladdtocart,
  getcartuserid,
} = require("../controllers/cart");

router.post("/user/createaddtocart", createAddItemToCart);
router.get("/user/getaddtocart/", getaddItemToCart);
//router.get("/user/getoneaddtocart/:id",getoneaddtocart)
//router.get("/getonecartproduct/:id", getoneproduct);
router.get("/getalladdtocart", getalladdtocart);
router.delete("/user/deleteaddtocart/:id", deleteAddItemToCart);

router.get("/user/getcartuserid", getcartuserid);

module.exports = router;
