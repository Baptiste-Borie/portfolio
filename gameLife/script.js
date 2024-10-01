"use strict";

const rowsInput = document.getElementById('rowsInput');
const colsInput = document.getElementById('colsInput');
const updateBtn = document.getElementById('updateBtn');
const gridContainer = document.getElementById('grid-container');


updateBtn.addEventListener('click', updateGrid);

let grid = createGrid();

console.log(rowsInput);

function createGrid() {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    
    const grid = [];
    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
            grid[i][j] = false;
        }
    }
    calcDim(grid);
    return grid;
}

function renderGrid(grid, container) {
    // Détache les écouteurs d'événements
    container.innerHTML = '';
    
    grid.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.className = "row";
        row.forEach((cell, collIndex) => {
            const cellElement = document.createElement('div');
            cellElement.className = cell ? 'cell alive' : 'cell dead';
            cellElement.addEventListener('click', () => toggleCell(grid, rowIndex, collIndex));
            rowElement.appendChild(cellElement);
        });
        container.appendChild(rowElement);
    });
}

function toggleCell(grid, row, coll) {
    grid[row][coll] = !grid[row][coll];
    renderGrid(grid, gridContainer);
}


function updateGrid() {
    grid = createGrid();
    calcDim(grid);
    renderGrid(grid, gridContainer);
}

function stepSimulation(grid) {
    const newGrid = createGrid();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const neighborsAlive = countNeighborsAlive(grid, i, j);
            if (grid[i][j]) {
                if (neighborsAlive < 2 || neighborsAlive > 3) {
                    newGrid[i][j] = false;
                } else {
                    newGrid[i][j] = true;
                }
            } else {
                if (neighborsAlive === 3) {
                    newGrid[i][j] = true;
                } else {
                    newGrid[i][j] = false;
                }
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            grid[i][j] = newGrid[i][j];
        }
    }
    renderGrid(grid, gridContainer);
}



function countNeighborsAlive(grid, row, col) {
    let neighborsAlive = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            const neighborRow = row + i;
            const neighborCol = col + j;
            if (neighborRow >= 0 && neighborRow < grid.length &&
                neighborCol >= 0 && neighborCol < grid[0].length) {
                if (grid[neighborRow][neighborCol]) {
                    neighborsAlive++;
                }
            }
        }
    }
    return neighborsAlive;
}

let simulationInterval;
    let isSimulationRunning = false;
    let generationCount = 0; // Ajout d'un compteur de génération
    let compteur = document.getElementById('generationCount');

    // Ajoute un gestionnaire d'événements pour le bouton "Lancer"
    document.getElementById('startBtn').addEventListener('click', startSimulation);

    // Ajoute un gestionnaire d'événements pour le bouton "Stop"
    document.getElementById('stopBtn').addEventListener('click', stopSimulation);

    function startSimulation() {
        if (!isSimulationRunning) {
            simulationInterval = setInterval(() => {
                generationCount++;
                compteur.textContent= "Génération : " + generationCount;
                stepSimulation(grid);
            }, 100);
            isSimulationRunning = true;
        }
    }

    function stopSimulation() {
        // Arrête la simulation
        clearInterval(simulationInterval);
        isSimulationRunning = false;
        compteur.textContent = "Génération : 0";
        generationCount = 0; // Réinitialisation du compteur de génération lors de l'arrêt de la simulation
    }
    renderGrid(grid, gridContainer);

    /* ---------- Fonction annexe ---------- */

    function calcDim(grid){
        const cellSize = 20; // Taille d'une cellule en pixels
        const rows = grid.length;
        const cols = grid[0].length;
        
        let width = cols * cellSize + 'px';
        let height = rows  * cellSize + 'px';
        console.log(height);
        console.log(width);
    
        gridContainer.style.width = width;
        gridContainer.style.height = height;
    }
    
