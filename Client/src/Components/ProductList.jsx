import React from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    _id: "629dce3b55a91801ae5a8a2a",
    title: "Pack of 3 Casual Shirt",
    brand: "Roadster",
    color: "black",
    price: 3299,
    old_price: 3499,
    discount: 10,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
    rating: 4,
    __v: 0,
  },
  {
    _id: "629dce3b55a91801ae5a8a2a",
    title: "Pack of 3 Casual Shirt",
    brand: "Roadster",
    color: "black",
    price: 3299,
    old_price: 3499,
    discount: 10,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
    rating: 4,
    __v: 0,
  },
  {
    _id: "629dce3b55a91801ae5a8a2a",
    title: "Pack of 3 Casual Shirt",
    brand: "Roadster",
    color: "black",
    price: 3299,
    old_price: 3499,
    discount: 10,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
    rating: 4,
    __v: 0,
  },
  {
    _id: "629dce3b55a91801ae5a8a2a",
    title: "Pack of 3 Casual Shirt",
    brand: "Roadster",
    color: "black",
    price: 3299,
    old_price: 3499,
    discount: 10,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
    rating: 4,
    __v: 0,
  },
  {
    _id: "629dce3b55a91801ae5a8a2a",
    title: "Pack of 3 Casual Shirt",
    brand: "Roadster",
    color: "black",
    price: 3299,
    old_price: 3499,
    discount: 10,
    image:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
    rating: 4,
    __v: 0,
  },
];
const total_page = 5;
const ProductList = () => {
  for (let i = 1; i < total_page; i++) {}
  return (
    <div className="productlist__container">
      <div className="productlist__filter_container">
        <h1 className="filter__container__heading">Filter Products</h1>
        <div className="filter__brand__container">
          <h5>{">> "}Brand</h5>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand one
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand two
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand three
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand four
          </label>
        </div>
        <div className="filter__brand__container">
          <h5>{">> "}Color</h5>

          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand one
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand two
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand three
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand four
          </label>
        </div>
        <div className="filter__brand__container">
          <h5>{">> "}Price Range</h5>

          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand one
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand two
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand three
          </label>
          <label className="filter__brand">
            <input type="checkbox" name="favorite_pet" />
            Brand four
          </label>
        </div>
      </div>
      <div className="productlist__right__container">
        <div className="productlist__sorting__container">
          {" "}
          Sort Products :{" "}
          <select name="" id="" className="productlist__sort">
            <option value="">Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
        <div className="productlist__list__container">
          {data.map((el) => (
            <ProductCard prod={el} />
          ))}
        </div>
        <div class="pagination__center__wrapper">
          <div className="products__pagination__container">
            <button>PREV</button>
            <button>1</button>
            <button class="active">2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
