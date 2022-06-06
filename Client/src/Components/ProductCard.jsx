import React from "react";

const ProductCard = ({prod}) => {

  return (
    <div className="product__card" key={prod._id}>
      <div className="product__imgDiv">
        <img src={prod.image} alt="" className="product__img" />
      </div>
      <div className="product__infoDiv">
        <h5 className="product__brand">{prod.brand}</h5>
        <div className="product__title">{prod.title}</div>
        <div className="product__price__section">
          <div className="product__price">
            <b>₹{prod.price}</b>
          </div>
          <div className="product__old_price">₹{prod.old_price}</div>
        </div>
        <div className="product__discount">{prod.discount}%</div>
      </div>
    </div>
  );
};

export default ProductCard;
