const gridContainer = document.querySelector('#grid-container');

function createGrid(rows, cols) {
    gridContainer.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    for (let i = 0; i < (rows * cols); i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('grid-item');
        newCell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(newCell);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}


const changeDimensionBtn = document.querySelector('#change-squares-btn');
changeDimensionBtn.addEventListener('click', changeDimension);

function changeDimension() {
    let userInput = parseInt(prompt('Please enter a whole number between 2 and 100.', '2'));
    if (Number.isInteger(userInput) && (userInput >= 2) && (userInput <= 100)) {
        createGrid(userInput, userInput);
    } else {
        alert('Please enter a valid number!');
    }
}