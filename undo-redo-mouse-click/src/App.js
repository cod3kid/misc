import { useState } from "react";
import "./styles.css";

export default function App() {
  const [points, setPoints] = useState([]);
  const [aux, setAux] = useState([]);

  const handleMouseClick = (e) => {
    e.stopPropagation();
    const { clientX, clientY } = e;
    setAux([]);
    setPoints((prev) => [...prev, { x: clientX, y: clientY }]);
  };

  const handleUndoButtonClick = () => {
    if (!points.length) return;

    const pointsCopy = [...points];
    const last = pointsCopy.pop();
    setAux((prev) => [...prev, last]);
    setPoints(pointsCopy);
  };

  const handleRedoButtonClick = () => {
    if (!aux.length) return;
    const auxCopy = [...aux];
    const last = auxCopy.pop();
    setPoints((prev) => [...prev, last]);
    setAux(auxCopy);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={handleUndoButtonClick}>Undo</button>
        <button onClick={handleRedoButtonClick}>Redo</button>
      </div>

      <div className="App" onClick={handleMouseClick}>
        {points.length > 0 &&
          points.map((point, idx) => {
            return (
              <div
                style={{
                  top: point.y - 10,
                  left: point.x - 10,
                  position: "absolute",
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  backgroundColor: "black",
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
