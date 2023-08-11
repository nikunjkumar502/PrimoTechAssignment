import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import TimerDisplay from "./TimerDisplay";
import OfficeClock from "./OfficeClock";

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - speed, 0));
      }, 1000);
      console.log(interval);
    }

    return () => clearInterval(interval);
  }, [isPaused, speed, duration]);

  return (
    <>
    <div className="countdown-timer">
      <Controls
        startTimer={(minutes) => {
          setDuration(minutes * 60);
          setRemainingTime(minutes * 60);
          setIsPaused(false);
        }}
      />
      </div>
      <div>
      <TimerDisplay
        remainingTime={remainingTime}
        isPaused={isPaused}
        pauseTimer={() => setIsPaused(true)}
        resumeTimer={() => setIsPaused(false)}
        setSpeed={(value) => setSpeed(value)}
        setduration={(minutes) => setDuration(minutes * 60)}
      />
      </div>
      <div>
      <OfficeClock remainingTime={remainingTime} />
    </div>
    </>
    
  );
};

export default CountdownTimer;
