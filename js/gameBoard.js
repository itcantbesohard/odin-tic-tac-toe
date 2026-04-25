const Gameboard = () => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const placeMark = (index, mark) => {
        if (index === null || mark === null) return;
        if (board[index] !== null) return;
        board[index] = mark;
    };

    const resetBoard = () => {
        board = Array(9).fill(null);
    }

    return {
        getBoard,
        placeMark,
        resetBoard
    };

}

export default Gameboard;
