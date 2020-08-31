var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var weatherData = [
  {
    id: 1,
    city: "Hyderabad",
    temp: 40,
    rain: "Light rain",
  },
  {
    id: 2,
    city: "Visakhapatnam",
    temp: 32,
    rain: "Foggy",
  },
  {
    id: 3,
    city: "Kurnool",
    temp: 33,
    rain: "Cloudy",
  },
];
//var weatherapis = require("./routes/weatherapi");
var signupapis = require("./routes/signupapi");
//app.use("/api/weather", weatherapis);
app.use("/api/user", signupapis);
app.get("/api/wetherdata", (req, res) => {
  res.send(weatherData);
});
app.listen(5000, () => {
  console.log("server is started");
});
