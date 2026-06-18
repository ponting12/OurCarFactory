import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-4">
        <h1>Digital Clock</h1>
        <h2>{time.toLocaleTimeString()}</h2>
        <p>{time.toDateString()}</p>
      </div>
    </div>
  );
}

export default DigitalClock;