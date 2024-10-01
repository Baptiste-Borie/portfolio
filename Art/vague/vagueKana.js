"use-strict";


document.addEventListener("DOMContentLoaded", function() {
    var gridContainer = document.getElementById("gridVague");

    for (let i = 0; i < 60; i++) {
        for (let j = 0; j < 60; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add(`c${i}-${j}`);
            gridContainer.appendChild(cell);
        }
    }
});