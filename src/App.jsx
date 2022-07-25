import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Game1 from "./assets/img/game_1.jpg";
import Game2 from "./assets/img/game_2.jpg";
import Game3 from "./assets/img/game_3.jpg";
import Game4 from "./assets/img/game_4.jpg";

function App() {
  return (
    <>
      <div className="app">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="grid-container">
          <div className="brand-container">
            <p className="description">Google Platform</p>
            <h1 className="title">Stadia</h1>
            <h2 className="subtitle">Play beyond</h2>
          </div>
          <div className="brand-images">
            <img className="brand-image" src={Game1} alt="react logo" />
            <img className="brand-image" src={Game2} alt="react logo" />
            <img className="brand-image" src={Game3} alt="react logo" />
            <img className="brand-image" src={Game4} alt="react logo" />
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="free-access-btn">Get early access</button>
      </div>
    </>
  );
}

export default App;
