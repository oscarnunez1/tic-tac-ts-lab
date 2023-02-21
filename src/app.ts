/*-------------------------------- Constants --------------------------------*/

const winningCombos: number[][] = [
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

let board: (number | null)[]
let turn: number
let winner: boolean
let tie: boolean 

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr") as NodeListOf<HTMLDivElement>;

const messageEl = document.querySelector("#message") as HTMLDivElement;

const resetBtnEl = document.querySelector("#reset-button") as HTMLButtonElement;

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square: HTMLDivElement) => {
  square.addEventListener("click", handleClick);
});

if (resetBtnEl) {
  resetBtnEl.addEventListener("click", init)
}

/*-------------------------------- Functions --------------------------------*/

init()

function init(): void {
  board = [ null, null, null, null, null, null, null, null, null ]
  turn = -1
  winner = false
  tie = false
  render()
}

function render(): void {
  updateBoard()
  updateMessage()
}

function updateBoard(): void {
  board.forEach(( square: number | null, index: number ) => {
    if (square === 1) {
      return (squareEls[index].textContent = "X")
    } else if ( square === -1 ) {
      return (squareEls[index].textContent = "O")
    } else if (square === null) {
      return (squareEls[index].textContent = "")
    }
  })
}

function updateMessage(): void {
  if (!winner && !tie) {
    messageEl.innerText = `It's ${turn > 0 ? "X" : "O"}'s turn!`
  } else if (!winner && tie) {
    messageEl.innerText = `Tie game!`;
  } else {
    messageEl.innerText = `${turn > 0 ? "X" : "O"} wins!`;
  }
}

function handleClick(evt: MouseEvent): void {
  const sqIdx = parseInt((evt.target as HTMLElement).id.slice(2))
  if (board[sqIdx] !== null) return
  if (winner == true) return
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(index: number): void {
  board[index] = turn
}

function checkForTie(): void {
  if (!board.includes(null)) {
    tie = true
  }
}

function checkForWinner(): void {
  winningCombos.forEach((winningArray: number[]) => {
    let sum = winningArray.reduce((prev: number, num: number) => {
      return prev + (board[num] ?? 0)
    }, 0)
    if (Math.abs(sum) === 3) {
      winner = true
    }
  })
}

function switchPlayerTurn(): void {
  if (winner === true) {
    return
  } else {
    turn = turn * -1
  }
}