//AddProducts
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productBrand: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  // category: {
  //   type: ObjectId,
  //   ref: "Category",
  //   required: true,
  // },
  productPrice: {
    type: Number,
    required: true,
  },
  productPicture: [{ img: { type: String } }],
});

exports.Product = mongoose.model("Product", productSchema);
