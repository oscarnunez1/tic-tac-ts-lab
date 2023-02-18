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

// resetBtnEl.addEventListener('click', handleResetClick)


/*-------------------------------- Functions --------------------------------*/

// function handleResetClick(evt: MouseEvent): void {
//   console.log(evt)
// }

init()

function init(): void {
  console.log("The game is working")
  board = [ null, null, null, null, null, null, null, null, null ]
  turn = 1
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
    if ( square === 1 ) {
      return ( squareEls[index].textContent = "X" )
    } else if ( square === -1 ) {
      return ( squareEls[index].textContent = "O" )
    } else if ( square === null ) {
      return ( squareEls[index].textContent = "" )
    }
  })
}

function updateMessage(): void {
  if (!winner && !tie) {
    messageEl.innerText = `It's ${turn > 0 ? "X" : "O"}'s turn`
  } else if (!winner && tie) {
    messageEl.innerText = `Tie game`;
  } else {
    messageEl.innerText = `${turn > 0 ? "X" : "O"} wins`;
  }
}
