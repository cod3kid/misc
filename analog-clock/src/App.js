import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  const generateStyles = (hand) => {
    let style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transformOrigin: "left",
      border: "1px solid black",
      width: 100,
      transform: `rotate(${time.getSeconds() * 6 + 270}deg)`
    };

    if (hand === "hour") {
      style = {
        ...style,
        border: "3px solid red",
        width: 60,
        transform: `rotate(${time.getHours() * 15 + 270}deg)`
      };
    }

    if (hand === "minute") {
      style = {
        ...style,
        border: "2px solid blue",
        width: 90,
        transform: `rotate(${time.getMinutes() * 6 + 270}deg)`
      };
    }

    return style;
  };

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  return (
    <div className="App">
      <div className="clock">
        <div style={generateStyles("second")} />
        <div style={generateStyles("hour")} />
        <div style={generateStyles("minute")} />
      </div>
    </div>
  );
}
