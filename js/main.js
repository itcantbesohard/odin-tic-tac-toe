import GameController from "./gameController.js";
import DisplayController from "./displayController.js";
import Gameboard from "./gameBoard.js";

const resetBtn = document.querySelector('.reset-btn');

const game = GameController();
const display = DisplayController(game);

display.renderBoard();
display.initEvents();

//display status?