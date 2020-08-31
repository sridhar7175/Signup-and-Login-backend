var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/registerdata");
var registerSchema = mongoose.Schema({
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
});
exports.Signup = mongoose.model("Signup", registerSchema);
