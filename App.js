import React from 'react';
import Chat from './Chat';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <h2>Discord Clone</h2>
        <button className="btn">Channel 1</button>
        <button className="btn">Channel 2</button>
        <button className="btn">Channel 3</button>
      </div>
      <Chat />
    </div>
  );
}

export default App;
