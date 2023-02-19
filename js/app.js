"use strict";
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [2, 5, 8],
    [0, 3, 6],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5]
];
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
console.log(squareEls);
const messageEl = document.querySelector("#message");
console.log(messageEl);
const resetBtnEl = document.querySelector("#reset-button");
console.log(resetBtnEl);
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
    square.addEventListener("click", handleClick);
});
// resetBtnEl.addEventListener('click', handleResetClick)
/*-------------------------------- Functions --------------------------------*/
// function handleResetClick(evt: MouseEvent): void {
//   console.log(evt)
// }
init();
function init() {
    console.log("INITIALIZED");
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    console.log("RENDERING");
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((square, index) => {
        if (square === 1) {
            return (squareEls[index].textContent = "X");
        }
        else if (square === -1) {
            return (squareEls[index].textContent = "O");
        }
        else if (square === null) {
            return (squareEls[index].textContent = "");
        }
    });
}
function updateMessage() {
    console.log("UPDATING MESSAGE");
    if (!winner && !tie) {
        messageEl.innerText = `It's ${turn > 0 ? "X" : "O"}'s turn`;
    }
    else if (!winner && tie) {
        messageEl.innerText = `Tie game`;
    }
    else {
        messageEl.innerText = `${turn > 0 ? "X" : "O"} wins`;
    }
}
function handleClick(evt) {
    console.log("CLICKED");
    const sqIdx = parseInt(evt.target.id.slice(2));
    if (board[sqIdx] !== null)
        return;
    if (winner == true)
        return;
    placePiece(sqIdx);
    checkForTie();
    checkForWinner();
    switchPlayerTurn();
    render();
}
function placePiece(index) {
    board[index] = turn;
}
