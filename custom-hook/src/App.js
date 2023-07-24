import { useState } from "react";
import "./App.css";
import { useDebounce } from "./useDebounce";

function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <input name="search" value={value} onChange={handleChange} />
      <div>{debouncedValue}</div>
    </div>
  );
}

export default App;
