const gameGrid = document.querySelector('.game-grid');
const resetBtn = document.querySelector('.reset-btn');

const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return { getName, getMark };
};

const Gameboard = () => {
    let board = ["", "", "", "O", "O", "O", "", "", ""];

    const getBoard = () => board;

    const placeMark = (index, mark) => {
        if (index === null || mark === null) return;
        if (board[index !== null]) return;
        board[index] = mark;
    };

    const resetBoard = () => {
        board = Array(9).fill(null);
    }

    return {
        getBoard,
        placeMark,
        resetBoard,
    };

}

const GameController = () => {
    const player = Player("Player", "X");
    const computer = Player("Computer", "O");
    const board = Gameboard();

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
        winPatterns.forEach(element => {
            const cell1 = element[0];
            const cell2 = element[1];
            const cell3 = element[2];
            if (board[cell1] === board[cell2] && board[cell2] === board[cell3]) {
                isWin = true;
                return
            }

        });
        return isWin;
    }

    return {
        checkWin
    }

};

const gameController = GameController();

console.log(gameController.checkWin());
