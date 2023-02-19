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
console.log(squareEls)

const messageEl = document.querySelector("#message") as HTMLDivElement;
console.log(messageEl) 

const resetBtnEl = document.querySelector("#reset-button") as HTMLButtonElement;
console.log(resetBtnEl);

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square: HTMLDivElement) => {
  square.addEventListener("click", handleClick);
});

// resetBtnEl.addEventListener('click', handleResetClick)


/*-------------------------------- Functions --------------------------------*/

// function handleResetClick(evt: MouseEvent): void {
//   console.log(evt)
// }

init()

function init(): void {
  console.log("INITIALIZED")
  board = [ null, null, null, null, null, null, null, null, null ]
  turn = -1
  winner = false
  tie = false
  render()
}

function render(): void {
  console.log("RENDERING");
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
  console.log("UPDATING MESSAGE");
  if (!winner && !tie) {
    messageEl.innerText = `It's ${turn > 0 ? "X" : "O"}'s turn`
  } else if (!winner && tie) {
    messageEl.innerText = `Tie game`;
  } else {
    messageEl.innerText = `${turn > 0 ? "X" : "O"} wins`;
  }
}

function handleClick(evt: MouseEvent): void {
  console.log("CLICKED");
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
  console.log("PIECE PLACED");
  board[index] = turn
}

function checkForTie(): void {
  console.log("IS IT A TIE?");
  
  if (!board.includes(null)) {
    tie = true
  }
}

function checkForWinner(): void {
  console.log("IS THERE A WINNER?");
  
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
  console.log("SWITCHING TURNS");
  
  if (winner === true) {
    return
  } else {
    turn = turn * -1
  }
}