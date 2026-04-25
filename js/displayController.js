import { createElement } from "react";

const DisplayController = () => {
    const gameGrid = document.querySelector(".game-grid");
    const player = document.querySelectorAll(".player");

    const renderBoard = (board) => {
        grid.replaceChildren();

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

    return {
        renderBoard,
        setActivePlayer
    }

};