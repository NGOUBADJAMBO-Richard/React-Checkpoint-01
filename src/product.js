// Create a file called product.js with a json object of a product’s name, price, description, and a path or URL to an image. (Don’t forget to export the json object)
// src/App.js
import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const product = {
  name: 'Product Name',
  price: 99.99,
  description: 'This is a great product.',
  imageUrl: 'https://via.placeholder.com/150',
  altText: 'Product Image'
};

const App = () => {
  return (
    <div>
      <Name name={product.name} />
      <Price price={product.price} />
      <Description description={product.description} />
      <Image imageUrl={product.imageUrl} altText={product.altText} />
    </div>
  );
};

export default App;

  

  
