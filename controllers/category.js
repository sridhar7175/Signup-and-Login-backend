var db = require("../models/category");

exports.categoryById = (req, res, next, id) => {
  db.Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category does not exist",
      });
    }
    req.category = category;
    next();
  });
};

exports.getallcategories = (req, res) => {
  db.Category.find()
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.createcategory = (req, res) => {
  var newCategory = new db.Category(req.body);
  newCategory
    .save()
    .then((category) => {
      res.status(200).send(category);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

//Get Only id

exports.getCategoryId = (req, res) => {
  return res.json(req.category);
};

exports.updateCategoryId = (req, res) => {
  db.Category.update(
    { _id: req.category._id },
    { $set: { name: req.body.name } },
    { new: true },
    (err, category) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update category",
        });
      }
      res.json(category);
    }
  );
};

exports.deleteCategoryId = (req, res) => {
  const category = req.category;
  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this category",
      });
    }
    res.json({
      message: "Successfully deleted",
    });
  });
};
