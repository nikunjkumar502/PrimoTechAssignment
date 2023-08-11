import React, { useState } from "react";
import "./App.css";

const Controls = ({ startTimer }) => {
  const [minutes, setMinutes] = useState(0);

  return (
    <div className="controls">
      <span className="countdown-timer">
        Countdown: &nbsp;
        <input
          type="number"
          value={minutes}
          className="inputField"
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="Enter minutes"
        />
        <button onClick={() => startTimer(minutes)}>Start</button>
      </span>
    </div>
  );
};

export default Controls;
