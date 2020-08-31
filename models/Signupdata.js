var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/signup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var signupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:Number,
    default:0
  }
});
exports.Signup = mongoose.model("Signup", signupSchema);

//Sign in

var signinSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

exports.Signin = mongoose.model("Signin", signinSchema);

//AddProducts

var productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productBrand: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

exports.Product = mongoose.model("Product", productSchema);
