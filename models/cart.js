const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    signup_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Signup"
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Product"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
