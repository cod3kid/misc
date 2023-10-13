import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isRunning, setRunning] = useState(false);

  const startTimer = () => {
    let timer = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 10);

    setRunning(true);
    setTimer(timer);
  };

  const pauseTimer = () => {
    clearInterval(timer);
    setRunning(false);
  };

  const resetTimer = () => {
    pauseTimer();
    setCounter(0);
    setTimer(null);
    setRunning(false);
  };

  return (
    <div className="App">
      <h1>
        {Math.floor(counter / 100)}:{counter % 100}
      </h1>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
