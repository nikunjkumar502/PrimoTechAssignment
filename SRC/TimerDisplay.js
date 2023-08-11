import React from "react";
import { BsPauseCircle} from "react-icons/bs";
import { GrResume } from "react-icons/gr";
import "./App.css";

const TimerDisplay = ({
  remainingTime,
  isPaused,
  pauseTimer,
  resumeTimer,
  setSpeed,
  duration,
}) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  let message = "";
  if (remainingTime == 0) {
    message = "Time up!";
  } else if (remainingTime <= remainingTime / 2) {
    message = "More than halfway there!";
  }
  
  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="timer-container">
      <div className={remainingTime <= 20 ? "red-text" : ""}>{message}</div>
      <div className={remainingTime <= 20 ? "red-text" : ""}>
        {`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}
        {isPaused ? (
          <GrResume onClick={resumeTimer} className="icon-styling"></GrResume>
        ) : (
          <BsPauseCircle
            onClick={pauseTimer}
            className="icon-styling"
          ></BsPauseCircle>
        )}
      </div>
      <div>
        <button onClick={() => handleSpeedChange(1.0)}>1.0X</button>
        <button onClick={() => handleSpeedChange(1.5)}>1.5X</button>
        <button onClick={() => handleSpeedChange(2.0)}>2X</button>
      </div>
    </div>
  );
};

export default TimerDisplay;
