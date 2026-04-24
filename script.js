const gameGrid = document.querySelector('.game-grid');
const resetBtn = document.querySelector('.reset-btn');

const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return { getName, getMark };
};

const GameBoard = () => {
    let board = Array(9).fill(null);

    const getBoard = () => board.slice();

    const placeMark = (index, mark) => {
        if (board[index] != null) return false;
        board[index] = mark;
        return true;
    };

    const resetBoard = () => {
        board = Array(9).fill(null);
    };

    return {
        getBoard,
        placeMark,
        resetBoard,
    };

}

const GameController = () => {

    const player1 = Player("Player", "X");
    const player2 = Player("Computer", "O");

    const players = [player1, player2];

    let currentPlayerIndex = 0;
    let gameOver = false;

    const board = GameBoard();

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const switchPlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    };

    const playRound = (index) => {
        if (gameOver) return;
        const success = board.placeMark(index, getCurrentPlayer().getMark());

        if (checkWinner()) {
            gameOver = true;
            return;
        }

        //draw 
        if (board.getBoard().every(cell => cell !== null)) {
            gameOver = true;
            return;
        }

        switchPlayer();
    };

    const resetGame = () => {
        board.resetBoard();
        currentPlayerIndex = 0;
        gameOver = false;
    };

    const checkWinner = () => {
        const b = board.getBoard();

        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => b[index] === getCurrentPlayer().getMark())
        );

    };

    return {
        playRound,
        getCurrentPlayer,
        resetGame,
        getBoard: board.getBoard,
    };

}

gameGrid.addEventListener(click, (e) => {

});