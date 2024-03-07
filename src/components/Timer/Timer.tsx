import React, { useEffect, useState } from "react";
import TimerContext from "../../context/TimerContext/TimerContext";

export default function Timer() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    if (counter === 0) {
      return;
    }
    const interval = setInterval(() => {
      counter > 0 && setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div>
      <TimerContext.Provider value={{ counter }}>
      </TimerContext.Provider>
    </div>
  );
}
