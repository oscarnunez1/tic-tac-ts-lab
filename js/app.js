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
