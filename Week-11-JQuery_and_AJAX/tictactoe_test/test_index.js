let boardGrid
let marks = ["X", "O"] //Player marks array, they are randomly assigned.
let player1 = marks[Math.floor(Math.random() * marks.length)] //random assigning of player1
let player2 = p2Mark()

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
function p2Mark() { //assigns the other character to player2
  let i = "";
  if (player1 === "X") {
    i = "O";
  } else {
    i = "X";
  }
  return i;
}
document.getElementById("playerBanner").innerText = `${player1} vs. ${player2}`;
console.log(player1);
console.log(player2);

const cells = document.querySelectorAll('.cell') //pushes all "cells" to the const cells

function startGame() { //starts the game
  document.getElementById("endgame").innerText = "Current Player: "
  boardGrid = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', turnClick, false)
  }
}
function turnClick(square) { //changes the turns
  turn(square.target.id, player1)
}
function turn(squareId, player) {
  boardGrid[squareId] = player
  document.getElementById(squareId).innerText = player
  let winner = checkWin(boardGrid, player)
  if (winner) gameComplete(winner)
}
function checkWin(board, player) {
  let plays = board.reduce((a, e, i) =>
    (e === player) ? a.concat(i) : a, [])
  let winner = null
  for (let [index, win] of winCombo.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      winner = { index: index, player: player }
      break
    }
  }
  return winner
}
function gameComplete(winner) {
  for (let index of winCombo[winner, index]) {
    document.getElementById(index).style.backgroundColor =
      winner.player == player1 ? "green" : "red"
  }
}
function endgame() { }

startGame()