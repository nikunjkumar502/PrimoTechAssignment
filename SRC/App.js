import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h3>Primathon Assignment</h3>
      </div>
      <div className="App-Center">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default App;
