var express = require("express");
var router = express.Router();
var {
  getproduct,
  createproduct,
  getoneproduct,
  updateproduct,
  deleteproduct,
  getproductsort,
  getSearch,
} = require("../controllers/product");
const multer = require("multer");
const path = require("path");

const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

//Get
router.get("/getproduct", getproduct);
router.post("/createproduct", upload.array("productPicture"), createproduct);
router.get("/getoneproduct/:id", getoneproduct);
router.put("/updateproduct/:id", upload.array("productPicture"), updateproduct);
router.delete("/deleteproduct/:id", deleteproduct);
router.get("/getproductsort", getproductsort);
//Search
router.get("/search/:productName", getSearch);

module.exports = router;
