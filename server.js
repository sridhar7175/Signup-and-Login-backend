var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//var weatherapis = require("./routes/weatherapi");
var signupapis = require("./routes/signupapi");
app.use("/api/user", signupapis);
//app.use('/api/userdata',userapis)

app.listen(5000, () => {
  console.log("server is started");
});
