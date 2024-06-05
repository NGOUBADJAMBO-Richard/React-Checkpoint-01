// src/components/Name.js
import React from 'react';
import product from '../product.json';

const Name = () => {
  return (
    <div className="product-name">
      <h1>{product.name}</h1>
    </div>
  );
};

export default Name;
