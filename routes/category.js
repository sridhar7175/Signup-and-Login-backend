var express = require("express");
var router = express.Router();
var {
  getallcategories,
  createcategory,
  getCategoryId,
  updateCategoryId,
  deleteCategoryId,
  categoryById,
} = require("../controllers/category");
var { getUserById } = require("../controllers/user");
router.param("categoryId", categoryById);
router.param("userById", getUserById);

router.get("/getallcategories", getallcategories);

router.post("/createcategory/:userById", createcategory);
router.get("/category/:categoryId", getCategoryId);
router.put("category/:categoryId/:userById", updateCategoryId);
router.delete("category/:categoryId/:userById", deleteCategoryId);

module.exports = router;
