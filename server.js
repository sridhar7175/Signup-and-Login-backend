require('dotenv').config()

const mongoose = require("mongoose");
var express = require("express");
var app = express();
var path=require('path')
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
//app.use(bodyParser.json());
app.use(bodyParser.json({limit: '10mb', extended: true}))
//app.use(bodyParser.urlencoded({ extended: true }));
//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
var authRoutes = require("./routes/auth");
var productRoutes = require("./routes/product");
var cartRoutes=require('./routes/cart')
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use('/api',cartRoutes)

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
