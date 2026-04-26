const DisplayController = (game) => {
    const gameGrid = document.querySelector(".game-grid");
    const player = document.querySelectorAll(".player");

    const renderBoard = () => {
        gameGrid.replaceChildren();
        const board = game.getBoard();

        board.forEach((cell, index) => {
            const div = document.createElement("div");
            div.classList.add("cell");
            div.dataset.index = index;
            div.textContent = cell ?? "";
            gameGrid.appendChild(div);
        });
    };

    const setActivePlayer = () => {
        player.forEach(el => {
            el.classList.toggle("active");
        });
    }

    const renderStatus = () => {
        const state = game.getState();

        if (!state.gameOver) return;

        if (state.result === "draw") {
            console.log("draw");
        }

        if (state.result === "win") {
            console.log(`${state.winner} won!`);
        }
    };

    const initEvents = () => {
        gameGrid.addEventListener("click", (e) => {
            console.log("CLICK", e.target)
            const cell = e.target;
            if (!cell.classList.contains("cell")) return;

            const index = cell.dataset.index;
            const round = game.playRound(index);

            renderStatus();
            renderBoard();
            setActivePlayer();
        });
    };

    return {
        renderBoard,
        setActivePlayer,
        initEvents
    }

};

export default DisplayController;