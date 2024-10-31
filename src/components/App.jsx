import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [state, setTime] = useState(time);

  function updateTime() {
    const curTime = (time = new Date().toLocaleTimeString());
    setTime(curTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
