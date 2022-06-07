import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

// const data = [
//   {
//     _id: "629dce3b55a91801ae5a8a2a",
//     title: "Pack of 3 Casual Shirt",
//     brand: "Roadster",
//     color: "black",
//     price: 3299,
//     old_price: 3499,
//     discount: 10,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
//     rating: 4,
//     __v: 0,
//   },
//   {
//     _id: "629dce3b55a91801ae5a8a2a",
//     title: "Pack of 3 Casual Shirt",
//     brand: "Roadster",
//     color: "black",
//     price: 3299,
//     old_price: 3499,
//     discount: 10,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
//     rating: 4,
//     __v: 0,
//   },
//   {
//     _id: "629dce3b55a91801ae5a8a2a",
//     title: "Pack of 3 Casual Shirt",
//     brand: "Roadster",
//     color: "black",
//     price: 3299,
//     old_price: 3499,
//     discount: 10,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
//     rating: 4,
//     __v: 0,
//   },
//   {
//     _id: "629dce3b55a91801ae5a8a2a",
//     title: "Pack of 3 Casual Shirt",
//     brand: "Roadster",
//     color: "black",
//     price: 3299,
//     old_price: 3499,
//     discount: 10,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
//     rating: 4,
//     __v: 0,
//   },
//   {
//     _id: "629dce3b55a91801ae5a8a2a",
//     title: "Pack of 3 Casual Shirt",
//     brand: "Roadster",
//     color: "black",
//     price: 3299,
//     old_price: 3499,
//     discount: 10,
//     image:
//       "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13768146/2021/6/23/417593de-c328-4acf-a4be-e71b975e669d1624427648602-Roadster-Men-Shirts-9331624427647856-1.jpg",
//     rating: 4,
//     __v: 0,
//   },
// ];
const total_page = 5;
const ProductList = () => {
  for (let i = 1; i < total_page; i++) {}

  const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  console.log("totalPage:", totalPage);

  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  let page = new URLSearchParams(search).get("page") || 1;
  page = +page;

  const brand = new URLSearchParams(search).get("brand") || "";
  const color = new URLSearchParams(search).get("color") || "";
  const from = new URLSearchParams(search).get("from") || "";
  const to = new URLSearchParams(search).get("to") || "";
  const sort = new URLSearchParams(search).get("sort") || "";
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [page, brand, color, from, to, sort, search]);

  const getData = () => {
    fetch(
      `http://localhost:8080/mens/list?brand=${brand}&color=${color}&from=${from}&to=${to}&sort=${sort}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setTotalPage(res.total_page);
        setData(res.data);
      })
      .catch((err) => console.log("error in Fetch: ", err));
  };

  let buttonNum = [];
  for (let i = 1; i <= totalPage; i++) {
    buttonNum.push(i);
  }

  const handlePriceChange = (e) => {
   let [start, end] = e.target.value.split("-");
    navigate(
      `?brand=${brand}&color=${color}&from=${start}&to=${end}&sort=${sort}&page=${page}`
    );
  };

  return (
    <div className="productlist__container">
      <div className="productlist__filter_container">
        <h1 className="filter__container__heading">Filter Products</h1>
        <div className="filter__brand__container">
          <h5>{">> "}Brand</h5>
          <label className="filter__brand">
            <input type="radio" name="brand" value="Roadster" />
            Roadster
          </label>
          <label className="filter__brand">
            <input type="radio" name="brand" value="Allen Solly" />
            Allen Solly
          </label>
          <label className="filter__brand">
            <input type="radio" name="brand" value="Blackberrys" />
            Blackberrys
          </label>
        </div>
        <div className="filter__brand__container">
          <h5>{">> "}Color</h5>

          <label className="filter__brand">
            <input type="radio" name="color" value="white" />
            White
          </label>
          <label className="filter__brand">
            <input type="radio" name="color" value="red" />
            Red
          </label>
          <label className="filter__brand">
            <input type="radio" name="color" value="yellow" />
            Yellow
          </label>
          <label className="filter__brand">
            <input type="radio" name="color" value="blue" />
            Blue
          </label>
          <label className="filter__brand">
            <input type="radio" name="color" value="black" />
            Balck
          </label>
          <label className="filter__brand">
            <input type="radio" name="color" value="gree" />
            green
          </label>
        </div>
        <div className="filter__brand__container">
          <h5>{">> "}Price Range</h5>

          <label className="filter__brand">
            <input
              type="radio"
              name="price"
              value="1000-2000"
              onChange={handlePriceChange}
            />
            1,000 to 2,000
          </label>
          <label className="filter__brand">
            <input
              type="radio"
              name="price"
              value="2000-3000"
              onChange={handlePriceChange}
            />
            2,000 to 3,000
          </label>
          <label className="filter__brand">
            <input
              type="radio"
              name="price"
              value="3000-5000"
              onChange={handlePriceChange}
            />
            3,000 to 5,000
          </label>
          <label className="filter__brand">
            <input
              type="radio"
              name="price"
              value="5000-10000"
              onChange={handlePriceChange}
            />
            5,000 to 10,000
          </label>
          <label className="filter__brand">
            <input
              type="radio"
              name="price"
              value="10000-99999999"
              onChange={handlePriceChange}
            />
            above 10,000
          </label>
        </div>
      </div>
      <div className="productlist__right__container">
        <div className="productlist__sorting__container">
          {" "}
          Sort Products :{" "}
          <select
            name=""
            id=""
            className="productlist__sort"
            onChange={(e) =>
              navigate(
                `?brand=${brand}&color=${color}&from=${from}&to=${to}&sort=${e.target.value}&page=${page}`
              )
            }
          >
            <option value={sort}>Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
        <div className="productlist__list__container">
          {data.map((el) => (
            <ProductCard prod={el} />
          ))}
        </div>
        <div className="pagination__center__wrapper">
          <div className="products__pagination__container">
            <button
              onClick={() => {
                if (page > 1) {
                  navigate(
                    `?brand=${brand}&color=${color}&from=${from}&to=${to}&sort=${sort}&page=${
                      page - 1
                    }`
                  );
                }
              }}
            >
              PREV
            </button>
            {data.length !== 0 &&
              buttonNum.map((el) => {
                return Number(page) == el ? (
                  <button className="active">{el}</button>
                ) : (
                  <button
                    onClick={() => {
                      navigate(
                        `?brand=${brand}&color=${color}&from=${from}&to=${to}&sort=${sort}&page=${el}`
                      );
                    }}
                  >
                    {el}
                  </button>
                );
              })}
            <button
              onClick={() => {
                if (page < totalPage) {
                  navigate(
                    `/list?brand=${brand}&color=${color}&from=${from}&to=${to}&sort=${sort}&page=${
                      page + 1
                    }`
                  );
                }
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
