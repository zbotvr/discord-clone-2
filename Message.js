import React from 'react';
import './App.css';

function Message({ text }) {
  return (
    <div className="message">
      <span>{text}</span>
    </div>
  );
}

export default Message;
