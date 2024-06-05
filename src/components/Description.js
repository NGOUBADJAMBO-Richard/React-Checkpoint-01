// src/components/Description.js
import React from 'react';
import product from '../product.json';

const Description = () => {
  return (
    <div className="product-description">
      <p>{product.description}</p>
    </div>
  );
};

export default Description;
