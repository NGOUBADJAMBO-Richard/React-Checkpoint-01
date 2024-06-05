// src/components/Price.js
import React from 'react';
import product from '../product.json';

const Price = () => {
  return (
    <div className="product-price">
      <h2>{`Price: $${product.price}`}</h2>
    </div>
  );
};

export default Price;
