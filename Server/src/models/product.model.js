const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  old_price: { type: Number, required: false },
  discount: { type: Number, required: false },
  image: { type: String, required: true },
  rating: { type: Number, required: false },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
