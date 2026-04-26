import Player from "./player.js";
import Gameboard from "./gameBoard.js";

const GameController = () => {
    const player = Player("Player", "X");
    const computer = Player("Computer", "O");
    const gameBoard = Gameboard();
    let gameOver = false;
    let currentPlayer = player;
    let winner = null;
    let result = null;

    const getBoard = () => gameBoard.getBoard();
    const getWinner = () => winner;

    const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    const checkWin = () => {
        let isWin = false;

        for (const element of winPatterns) {
            const board = gameBoard.getBoard();
            const [cell1, cell2, cell3] = element;

            if (board[cell1] !== null &&
                board[cell1] === board[cell2] &&
                board[cell2] === board[cell3]
            ) {
                isWin = true;
                break;
            }
        }

        return isWin;
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player ? computer : player;
    };

    const playRound = (index) => {

        if (gameOver) return;

        //mark
        gameBoard.placeMark(index,
            currentPlayer.getMark());

        //checkwin
        if (checkWin()) {
            gameOver = true;
            winner = currentPlayer.getName();
            result = "win";
            return;
        }

        //draw
        if (gameBoard.getBoard().every
            (cell => cell !== null)) {
            gameOver = true;
            result = "draw";
            return;
        }

        switchPlayer();

        //computer move
        if (currentPlayer === computer) {
            //getRandomMove
            //playMove
        }
    }

    const resetGame = () => {
        gameOver = false;
        result = null;
        winner = null;
        currentPlayer = player;
        gameBoard.resetBoard();
    }

    const getState = () => ({
        currentPlayer,
        winner,
        gameOver,
        result
    });

    return {
        checkWin,
        switchPlayer,
        playRound,
        getBoard,
        getState
    }

};

export default GameController;