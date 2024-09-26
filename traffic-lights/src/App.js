import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [lightsDuration, setLightsDuration] = useState({
    red: 10,
    yellow: 5,
    green: 15,
  });
  const [currentLight, setCurrentLight] = useState({
    light: "red",
    time: 10,
  });

  const getNextLight = () => {
    const light = currentLight.light;
    if (light === "red") {
      return "yellow";
    }

    if (light === "yellow") {
      return "green";
    }

    return "red";
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      const nextLight = getNextLight(currentLight.light);
      setCurrentLight({ light: nextLight, time: lightsDuration[nextLight] });
    }, currentLight.time * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentLight]);

  const handleOnClick = (light) => {
    setCurrentLight({ light, time: lightsDuration[light] });
  };

  return (
    <div>
      <div style={{ backgroundColor: currentLight.light }} className="light" />
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button onClick={() => handleOnClick("red")}>Red</button>
        <button onClick={() => handleOnClick("yellow")}>Yellow</button>
        <button onClick={() => handleOnClick("green")}>Green</button>
      </div>
    </div>
  );
};

export default App;
