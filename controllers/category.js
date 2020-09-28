var db = require("../models/category");

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
  var id = req.params.id;
  db.Category.find({ _id: id })
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.updateCategoryId = (req, res) => {
  var id = req.params.id;
  db.Category.findByIdAndUpdate(id, req.body, { new: true })
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.deleteCategoryId = (req, res) => {
  var id = req.params.id;
  db.Category.findByIdAndDelete({ _id: id })
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
