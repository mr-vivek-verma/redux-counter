import React from "react";

import "./index.css";

const ItemCard = ({ imgPath, name, price, onClick }) => (
  <div className="card">
    <img src={imgPath} alt="" style={{ width: "100%" }} />
    <h1>{name}</h1>
    <p className="price">{price}</p>
    <p>
      <button onClick={onClick}>Favourite</button>
    </p>
  </div>
);

export default ItemCard;
