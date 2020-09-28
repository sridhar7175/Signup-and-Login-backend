var express = require("express");
var router = express.Router();
var {
  getallcategories,
  createcategory,
  getCategoryId,
  updateCategoryId,
  deleteCategoryId,
} = require("../controllers/category");

router.get("/getallcategories", getallcategories);
router.post("/createcategory", createcategory);
router.get("category/:categoryId", getCategoryId);
router.put("category/:categoryId", updateCategoryId);
router.delete("category/:categoryId", deleteCategoryId);

module.exports = router;
