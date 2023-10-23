import { useEffect, useState } from "react";
import "./styles.css";

const gridsArr = Array(9)
  .fill(1)
  .map((_, index) => ({ id: index + 1, isClicked: false }));

export default function App() {
  const [grids, setGrids] = useState(gridsArr);
  const [gridPath, setGridPath] = useState([]);
  const [isCompleted, setCompleted] = useState(false);
  useEffect(() => {
    if (gridPath.length === 1) {
      setCompleted(false);
    }

    if (gridPath.length === 7) {
      setCompleted(true);
    }

    if (isCompleted) {
      setTimeout(() => {
        const currentGridPath = [...gridPath];
        const lastIndex = currentGridPath.pop();
        const newGrids = [...grids].map((item) => {
          if (item.id === lastIndex) {
            return { ...item, isClicked: false };
          }
          return item;
        });

        setGridPath([...currentGridPath]);
        setGrids([...newGrids]);
      }, 300);
    }
  }, [gridPath]);

  const handleGridItemClick = (id) => {
    if (id === 5) return;

    const newGrids = [...grids].map((item) => {
      if (item.id === id) {
        return { ...item, isClicked: true };
      }
      return item;
    });
    setGrids([...newGrids]);
    setGridPath([...gridPath, id]);
  };

  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", width: 180 }}>
      {grids.map((item) => (
        <div
          key={item.id}
          style={{
            border: item.id === 5 ? "none" : "1px solid black",
            backgroundColor: item.isClicked ? "green" : "white",
            height: 50,
            width: 50,
          }}
          onClick={() => handleGridItemClick(item.id)}
        />
      ))}
    </div>
  );
}
