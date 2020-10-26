require("dotenv").config();

const mongoose = require("mongoose");
var express = require("express");
var app = express();
var path = require("path");
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
//app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
//app.use(bodyParser.urlencoded({ extended: true }));
//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Routes
var authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
var productRoutes = require("./routes/product");
var cartRoutes = require("./routes/cart");
var categoryRoutes = require("./routes/category");
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", categoryRoutes);

//PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
