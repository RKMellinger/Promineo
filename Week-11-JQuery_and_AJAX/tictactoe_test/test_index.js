let boardGrid //declares the board, will be used later.
let marks = ["X", "O"] // Array of player marks, they are randomly assigned.

let player1 = marks[Math.floor(Math.random() * marks.length)] //random assigning of player1
let player2 = p2Mark() // uses a function to assign player2 mark

function p2Mark() { //assigns the other character to player2
  let i = "";
  if (player1 === "X") {
    i = "O";
  } else {
    i = "X";
  }
  return i;
}
console.log(player1);
console.log(player2);

// An Array of winning combinations.
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let winner = null
const cells = document.querySelectorAll('.cell') //pushes all "cells" to the const cells

// Starts a new game and resets board when reset button is pressed.
function startGame() {
  document.getElementById("endgame").style.display = "none"
  boardGrid = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', turnClick, false)
  }
}

function turnCount() {
  for (let i = 0; i < 6; i++) {
    if (i % 2 == 0) {
      return player1
    } else {
      return player2
    }
  }
}

//changes the turns to next player
function turnClick(square) {
  if ((stalemate() == false) && (typeof boardGrid[square.target.id] === 'number')) {
    turn(square.target.id, player1)
    if (stalemate() == false) {
      turn(openSpots(), player2)
    }
  }
}
// controls the players turn
function turn([squareId], player) {
  boardGrid[squareId] = player
  // console.log("printing boardGrid" + boardGrid)
  // console.log("Printing Player " + player);
  document.getElementById(squareId).innerHTML = player
  document.getElementById("playerBanner").innerText = `Current turn = ${player}`;
  let winner = checkWin(boardGrid, player)
  if (winner) gameComplete(winner)
}

//  Checks the board for winning combinations
function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, [])

  for (let [index, win] of winCombo.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      winner = { index: index, player: player }
      break
    }
  }
  return winner = winner
}

// Displays the winning pattern and stops the game and shows the winner
function gameComplete(winner) {

  for (var i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false);
  }
  declareWinner(winner.player == player1 ? "You win!" : "You lose.");
}

// Changes the winner banner to display who is the winner
function declareWinner(winner) {
  document.querySelector(".endgame").style.display = "block";
  document.querySelector(".endgame").innerText = winner;
}

// Checks current open
function openSpots() {
  return boardGrid.filter(s => typeof s == 'number')
}
// function openMoves() {
//   return openSpots()[0];
// }

// Determines if a stalemate
function stalemate() {
  if (openSpots().length == 0) {

    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = "green"
      cells[i].removeEventListener('click', turnClick, false)
    }
    declareWinner("Stalemate!")
    return true
  }
  return false
}




startGame()


