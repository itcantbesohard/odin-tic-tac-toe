const DisplayController = (game) => {
    const gameGrid = document.querySelector(".game-grid");
    const player = document.querySelectorAll(".player");
    const resetBtn = document.querySelector(".btn-restart");

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
        const state = game.getState();
        if (state.gameOver) return;

        player.forEach(el => {
            el.classList.toggle("active");
        });
    }

    const resetActivePlayer = () => {
        player.forEach(el => {
            el.classList.remove("active");
        });
        player[0].classList.add("active");
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
            const state = game.getState();
            const cell = e.target;

            if (state.gameOver) return;
            if (!cell.classList.contains("cell")) return;
            if (cell.textContent) return;

            const index = cell.dataset.index;

            game.playRound(index);
            renderStatus();
            renderBoard();
            setActivePlayer();
        });

        resetBtn.addEventListener("click", (e) => {
            game.resetGame();
            renderBoard();
            resetActivePlayer();
        });
    };

    return {
        renderBoard,
        setActivePlayer,
        resetActivePlayer,
        initEvents
    }

};

export default DisplayController;