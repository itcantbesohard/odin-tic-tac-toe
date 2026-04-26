import Player from "./player.js";
import Gameboard from "./gameBoard.js";

const GameController = () => {
    const player = Player("Player", "X");
    const computer = Player("Computer", "O");
    const gameBoard = Gameboard();
    let gameOver = false;
    let currentPlayer = player;

    const getBoard = () => gameBoard.getBoard();

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

        if (gameOver) return { status: "gameover" };

        //mark
        gameBoard.placeMark(index,
            currentPlayer.getMark());

        //checkwin
        if (checkWin()) {
            gameOver = true;
            return { status: "win" };
        }

        //draw
        if (gameBoard.getBoard().every
            (cell => cell !== null)) {
            gameOver = true;
            return { status: "draw" };
        }

        switchPlayer();

        //computer move
        if (currentPlayer === computer) {
            //getRandomMove
            //playMove
        }

        return { status: "continue", currentPlayer }
    }

    const resetGame = () => {
        gameOver = false;
        currentPlayer = player;
        gameBoard.resetBoard();
    }

    return {
        checkWin,
        switchPlayer,
        playRound,
        getBoard
    }

};

export default GameController;