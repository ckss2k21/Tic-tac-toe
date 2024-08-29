const cells = document.querySelectorAll('[data-filter]');
const turn = document.getElementById('status');
const resetButton = document.getElementById('resetButton');
let currentPlayer = 'X';
let activeTurn = true;
let gameWinOrDraw =  false;
const board = Array(9).fill(null);

function getWinner() {
    if(board[0] && board[0] === board[1] && board[0] == board[2]) {
        return true;
    }
    else if(board[3] && board[3] === board[4] && board[3] == board[5]) {
        return true;
    }
    else if(board[6] && board[6] === board[7] && board[6] == board[8]) {
        return true;
    }
    else if(board[0] && board[0] === board[3] && board[0] == board[6]) {
        return true;
    }
    else if(board[1] && board[1] === board[4] && board[1] == board[7]) {
        return true;
    }
    else if(board[2] && board[2] === board[5] && board[2] == board[8]) {
        return true;
    }
    else if(board[0] && board[0] === board[4] && board[0] == board[8]) {
        return true;
    }
    else if( board[2] && board[2] === board[4] && board[2] == board[6]) {
        return true;
    }
    
}
function handleEvent(event) {
    console.log(event.target);
    let clickedCell = event.target;
    const index = Array.from(cells).indexOf(event.target);
    if(gameWinOrDraw || board[index] || clickedCell.textContent !== '') {
        return;
    }
    clickedCell.textContent = currentPlayer;
    board[index] = currentPlayer;
    if(activeTurn) {
        currentPlayer = 'O';
        turn.textContent=`Player "${currentPlayer}" Turns.`;
        activeTurn = false;
    } else {
        currentPlayer = 'X';
        turn.textContent=`Player "${currentPlayer}" Turns.`;
        activeTurn = true;
    }
    
    if(getWinner()) {
        turn.textContent=`Hurray..!! Player ${board[index]} is the winner`;
        gameWinOrDraw = true;
        return;
    } 
    else if(board.every(val => val)) {
        turn.textContent=`Oh! Match Draw Try Again Later..!!`;
        gameWinOrDraw = true;
        return;
    }
    
}
function resetGame() {
    currentPlayer = 'X';
    activeTurn = true;
    gameWinOrDraw = false;
    turn.textContent=`Player "${currentPlayer}" Turns.`;
    board.fill(null);
    cells.forEach(cell => cell.textContent="");
}

document.addEventListener("DOMContentLoaded", ()=> {
    resetButton.addEventListener("click", resetGame);
    cells.forEach(cell => cell.addEventListener("click", handleEvent));

    turn.textContent=`Player "${currentPlayer}" Turns.`;

    
})
