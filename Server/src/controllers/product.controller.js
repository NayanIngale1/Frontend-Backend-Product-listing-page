const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const { brand, color, from, to, discount } = req.query;

    let data = Product.find().lean().exec();

    if (brand) {
      data = data.filter((el) => el.brand === brand);
    }
    if (color) {
      data = data.filter((el) => el.color === color);
    }

    if (from && to) {
      data = data.filter((el) => el.price >= from && el.price <= to);
    }

    if (discount) {
      data.data.filter((el) => el.discount > discount);
    }

      
    return res.status(200).send(body);
  } catch (error) {
    console.log("error:", error);
  }
});

module.exports = router;
