"use strict";
/*-------------------------------- Constants --------------------------------*/
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
// resetBtnEl?.addEventListener('click', handleResetClick)
/*-------------------------------- Functions --------------------------------*/
// function handleResetClick(evt: MouseEvent): void {
//   console.log(evt)
// }
init();
function init() {
    console.log("The game is working");
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
}
function updateBoard() {
    board.forEach((square, index) => {
        if (square === 1) {
            return (squareEls[index].textContent = "X");
        }
    });
}
