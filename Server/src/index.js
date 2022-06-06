const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const productController = require("./controllers/product.controller");

app.use("/mens", productController);
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome .......!</h1>");
});
module.exports = app;
