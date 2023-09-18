import "./styles.css";
const StarComponent = ({ rating, starId, handleRatingsClicked }) => {
  return (
    <div className="star" onClick={() => handleRatingsClicked(starId)}>
      <div
        className={
          rating >= starId ? "start-fragment-1" : "start-fragment-unselected-1"
        }
      />
      <div
        className={
          rating >= starId ? "start-fragment-2" : "start-fragment-unselected-2"
        }
      />{" "}
    </div>
  );
};

export default StarComponent;
