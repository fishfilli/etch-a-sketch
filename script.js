const gridContainer = document.querySelector('#grid-container');

function createGrid(rows, cols) {
    gridContainer.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    for (let i = 0; i < (rows * cols); i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('grid-item');
        gridContainer.appendChild(newCell);
    }
}

