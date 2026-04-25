import GameController from "./gameController.js";
import DisplayController from "./displayController.js";
import Gameboard from "./gameBoard.js";

const resetBtn = document.querySelector('.reset-btn');

const game = GameController();
const display = DisplayController();

display.renderBoard(game.getBoard());

//display status?

document.querySelector(".game-grid").addEventListener("click", (e) => { });