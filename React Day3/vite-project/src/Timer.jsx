import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h1>Timer Example</h1>
      <p>Counter increases every second using useEffect.</p>

      <div className="card">
        <h2>{count} Seconds</h2>
      </div>
    </div>
  );
};

export default Timer;