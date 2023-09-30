import Kiwi from "./kiwi.jpg";
import KiwiText from "./kiwialt.txt";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = KiwiText;
  img.width = 300;
  img.src = Kiwi;

  const body = document.querySelector("body");
  body.appendChild(img);
};

export default addImage;
