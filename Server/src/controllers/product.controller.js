const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const brand = req.query;
    const color = req.query;
    const from = req.query || 0;
    const to = req.query;
    const discount = req.query;
    const page = req.query || 1;
    const sort = req.query;

    let price;
    if (sort) {
      if (sort === "price_asc") {
        price = 1;
      } else if (sort === "price_desc") {
        price = -1;
      }
    }

    let offset = (page - 1) * 12;

    let data = Product.find({
      $and: [
        { brand: brand },
        { color: color },
        { price: { $gte: from } },
        { price: { $lte: to } },
        { discount: { $lte: discount } },
      ],
    })
      .sort({ price: price })
      .skip(offset)
      .limit(12)
      .lean()
      .exec();

    let total_page = Math.ceil(data.length / 12);

    return res.status(200).send({ data, total_page });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ message: "Something went wrong", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = Product.create(req.body);

    return res
      .status(201)
      .send({ message: "product created succeffully", data });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ message: "Something went wrong", error });
  }
});

module.exports = router;
