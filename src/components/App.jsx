import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [state, setTime] = useState(time);

  function updateTime() {
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime);
  }
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
