/*-------------------------------- Constants --------------------------------*/



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

// resetBtnEl?.addEventListener('click', handleResetClick)


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

