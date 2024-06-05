import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your CSS file if needed
import App from '../App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/components/index.js
export { default as Name } from './Name';
export { default as Price } from './Price';
// export { default as Description } from './Description';
export { default as Image } from './Image';
export { default as Message } from './Message';
