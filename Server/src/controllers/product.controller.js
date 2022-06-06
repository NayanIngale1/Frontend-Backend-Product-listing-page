const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const brand = req.query.brand || "";
    const color = req.query.color || "";
    const from = req.query.from || 0;
    const to = req.query.to || 10000000;
    const discount = req.query.discount;
    const page = req.query.page || 1;
    const sort = req.query.sort;

    let price;
    if (sort) {
      if (sort === "price_asc") {
        price = 1;
      } else if (sort === "price_desc") {
        price = -1;
      }
    }

    let offset = (page - 1) * 8;

    let data = await Product.find({
      $or: [
        {
          $and: [
            { brand: { $in: brand } },
            { color: { $in: color } },

            { discount: { $lte: discount } },
          ],
        },
        { price: { $gte: from } },
        { price: { $lte: to } },
      ],
    })
      .sort({ price: price })
      .skip(offset)
      .limit(8)
      .lean()
      .exec();

    let total_page = Math.ceil(
      (await Product.find({
        $or: [
          {
            $and: [
              { brand: { $in: brand } },
              { color: { $in: color } },

              { discount: { $lte: discount } },
            ],
          },
          { price: { $gte: from } },
          { price: { $lte: to } },
        ],
      }).countDocuments()) / 8
    );

    return res.status(200).send({ data, total_page });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ message: "Something went wrong", error });
  }
});

router.post("/list", async (req, res) => {
  try {
    const data = await Product.create(req.body);

    return res
      .status(201)
      .send({ message: "product created succeffully", data });
  } catch (error) {
    console.log("error:", error);
    return res.status(500).send({ message: "Something went wrong", error });
  }
});

module.exports = router;
