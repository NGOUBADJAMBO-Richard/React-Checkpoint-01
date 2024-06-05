// src/components/Image.js
import React from 'react';
import product from '../product.json';

const Image = () => {
  return (
    <div className="product-image">
      <img src={product.imageUrl} alt={product.altText} className="img-fluid" />
    </div>
  );
};

export default Image;
