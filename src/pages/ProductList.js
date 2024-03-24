// pages/ProductList.js
import React, { useContext } from 'react';
import Product from '../components/Product';
import { CartContext } from '../components/context/CartContext'; // Import CartContext to access cart state and functions
import EachProduct from '../components/EachProduct'; 

const ProductList = () => {
  const { addToCart } = useContext(CartContext); // UseContext hook to access addToCart function from CartContext

  return (
    <div className="product-list">
      {EachProduct.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onAddToCart={() => addToCart(product)} // Pass the entire product object to addToCart function
        />
      ))}
    </div>
  );
};

export default ProductList;
