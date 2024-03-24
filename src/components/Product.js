// components/Product.js
import React from 'react';

const Product = ({ name, image, price, onAddToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
