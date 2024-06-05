// src/components/Message.js
import React from 'react';

const Message = ({ firstName }) => {
  const imageUrl = "https://via.placeholder.com/150"; // Replace with your desired image URL

  return (
    <div className="message">
      <h3>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</h3>
      {firstName && <img src={imageUrl} alt="Welcome" />}
    </div>
  );
};

export default Message;
