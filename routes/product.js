var express = require("express");
var router = express.Router();
var {
  getproduct,
  createproduct,
  getproductid,
  updateproduct,
  deleteproduct,
} = require("../controllers/product");
const multer = require("multer");
const path=require('path')

const shortid=require('shortid')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads')) 
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname )
    }
  })


 const upload = multer({ storage });

//Get
router.get("/getproduct", getproduct);
router.post("/createproduct",upload.array('productPicture'), createproduct);
router.get("/getproduct/:id", getproductid);
router.put("/updateproduct/:id",upload.array('productPicture'),updateproduct);
router.delete("/deleteproduct/:id", deleteproduct);
module.exports = router;
