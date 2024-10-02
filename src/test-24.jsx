import React, { useState, useEffect } from 'react';

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds + 1); // Incorrectly relying on current state value
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup function not dependent on anything
  }, [isActive]);

  const resetTimer = () => {
    setSeconds = 0; // Incorrect way to reset state
  };

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

// No export statement
