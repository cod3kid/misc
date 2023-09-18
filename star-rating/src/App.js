import "./styles.css";
import StarComponent from "./star";
import { useState } from "react";

const stars = Array(5)
  .fill(5)
  .map((item, index) => index + 1);
export default function App() {
  const [rating, setRating] = useState(0);

  const handleRatingsClicked = (id) => {
    setRating(id);
  };
  return (
    <div className="App">
      <div className="star-panel">
        {stars.map((item) => (
          <StarComponent
            key={item}
            rating={rating}
            starId={item}
            handleRatingsClicked={handleRatingsClicked}
          />
        ))}
      </div>
    </div>
  );
}
