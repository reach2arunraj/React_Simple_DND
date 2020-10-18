import React, { useState } from 'react';
import './App.css';

function App() {
  const [one, setOne] = useState("")
  const [two, setTwo] = useState("")

  return (
    <div className="App">
      <div className="container">
        <p className="draggable" draggable="true" > Layer One </p>
        <p className="draggable" draggable="true" > Layer Two </p>
        <input value={one} onChange={(e) => setOne(e.target.value) } className="draggable" draggable="true" placeholder="Enter Your Text"/>
      </div>
      <div className="container">
        <p className="draggable" draggable="true" > Layer Four </p>
        <input value={two} onChange={(e) => setTwo(e.target.value) } className="draggable" draggable="true" placeholder="Enter Your Text"/>
      </div>
    </div>
  );
}

export default App;
