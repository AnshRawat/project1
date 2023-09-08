// Global variables
const board = document.querySelector('.board');
const status = document.querySelector('.status');
const cells = []; // Array to store individual cell elements
let currentPlayer = 'X'; // 'X' or 'O' for players
let gameOver = false;

// Create the game board
function createBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', handleCellClick);
            board.appendChild(cell);
            cells.push(cell);
        }
    }
}

// Handle cell click
function handleCellClick(event) {
    const cell = event.target;

    // Check if the cell is already occupied or if the game is over
    if (cell.textContent || gameOver) return;

    // Update the cell with the current player's marker
    cell.textContent = currentPlayer;

    // Check for a winner or a draw
    if (checkWin() === currentPlayer) {
        status.textContent = `${currentPlayer} wins!`;
        gameOver = true;
    } else if (checkDraw()) {
        status.textContent = 'It\'s a draw!';
        gameOver = true;
    } else {
        // Switch to the other player's turn
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `${currentPlayer}'s turn`;
    }
}

// Check for a win
function checkWin() {
    // Implement your win-checking logic here
}

// Check for a draw
function checkDraw() {
    // Implement your draw-checking logic here
}

// Initialize the game
createBoard();
status.textContent = `${currentPlayer}'s turn`;
