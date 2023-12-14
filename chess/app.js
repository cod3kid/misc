const chessBoard = document.getElementById("chessboard");
const playerTurn = document.getElementById("player");
const infoDisplay = document.getElementById("info-display");
const size = 8;
const initialBoard = [
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  pawn,
  rook,
  knight,
  bishop,
  queen,
  king,
  bishop,
  knight,
  rook,
];

const createBoard = () => {
  initialBoard.forEach((piece, idx) => {
    const square = document.createElement("div");
    const row = Math.floor((63 - idx) / 8) + 1;
    square.setAttribute("square-id", idx);
    square.classList.add("square");

    if (row % 2 === 0) {
      square.classList.add(idx % 2 === 0 ? "beige" : "brown");
    } else {
      square.classList.add(idx % 2 === 0 ? "brown" : "beige");
    }

    square.innerHTML = piece;

    if (idx >= 48) {
      square.children[0].children[0].classList.add("white");
    }
    chessBoard.append(square);
  });
};

createBoard();
