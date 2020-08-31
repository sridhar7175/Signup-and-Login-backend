var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/weatherdata");
var weatherSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  rain: {
    type: String,
    required: true,
  },
});
exports.Weather = mongoose.model("Weather", weatherSchema);

