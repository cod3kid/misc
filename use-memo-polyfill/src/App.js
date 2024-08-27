import React, { useMemo, useState } from "react";
import useCustomMemo from "../useCustomMemo";

const App = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const getCountSquare = useCustomMemo(() => {
    console.log("Expensive Computation");
    return count * count;
  }, [count]);

  return (
    <div>
      <h3>{getCountSquare}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCountTwo((prev) => prev + 1)}>
        Increment 2
      </button>
    </div>
  );
};

export default App;
