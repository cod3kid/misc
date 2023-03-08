import "./styles.css";
import { useEffect, useState } from "react";
import { useCustomEffect } from "./useCustomEffect";

export default function App() {
  const [counter, setCounter] = useState(0);

  useCustomEffect(() => {
    console.log("On Mount");
  }, []);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
}
