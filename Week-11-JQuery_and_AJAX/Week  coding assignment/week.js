class Player {
  // Player descriptions
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
    this.score = 0
  }
}

// List for player 2 names
const names = [
  "Stockfish 13",
  "Fat Fritz 2",
  "Komodo Dragon",
  "RubiChess 2.1",
  "Houdini 6",
  "Deep Blue",
  "AlphaGo",
  "Deep Mind",
  "Boris Diplomat",
  "Chess Challenger",
  "The King",
  "Mephisto",
  "Belle 1976",
  "AlphaZero 2017",
  "Maven",
  "Chinook",
  "KingsRow",
  "Chess Master 2000",
];

let marks = ["X", "O"]

// Creates the players
let player1 = new Player(
  prompt(`Please enter your name. ${this.name}`),
  prompt(`Please type "X" or "O". ${this.mark}`),
  this.score = 0
);
player1.mark = p1Mark() // Calls and forces player1 mark to "X" or "O" no matter what is entered.


// Assigns a random name and the opposite mark to player2.
let player2 = new Player(
  names[Math.floor(Math.random() * names.length)],
  (this.mark = p2Mark()), this.score = 0
);

// Putting all of the grid id's into a
const gameSquares = [
  $("#0"),
  $("#1"),
  $("#2"),
  $("#3"),
  $("#4"),
  $("#5"),
  $("#6"),
  $("#7"),
  $("#8"),
];

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



// Clearing the test text from the grid.
document.getElementById("0").innerHTML = "";
document.getElementById("1").innerHTML = "";
document.getElementById("2").innerHTML = "";
document.getElementById("3").innerHTML = "";
document.getElementById("4").innerHTML = "";
document.getElementById("5").innerHTML = "";
document.getElementById("6").innerHTML = "";
document.getElementById("7").innerHTML = "";
document.getElementById("8").innerHTML = "";



// Assigning an event listener for the click via JQuery
$("#0").on("click", () => currentMove)
$("#1").on("click", () => currentMove)
$("#2").on("click", () => currentMove)
$("#3").on("click", () => currentMove)
$("#4").on("click", () => currentMove)
$("#5").on("click", () => currentMove)
$("#6").on("click", () => currentMove)
$("#7").on("click", () => currentMove)
$("#8").on("click", () => currentMove)


$("winner").val(`Current turn is: ${currentTurn()}`);
let winning_player = "";
// winning_player = player1.name;





function p1Mark() { // Forces only "X" or "O" and will assign if needed
  if (player1.mark === "X" || player1.mark === "O") {
    return player1.mark;
  } else if (player1.mark === "x") {
    return (player1.mark = "X");
  } else if (player1.mark === "o") {
    return (player1.mark = "O");
  } else {
    alert("That is an invalid choice, I will now assign your mark.");
    return (player1.mark = marks[Math.floor(Math.random() * marks.length)])
  }
}

// Assigns the other mark to Player2 
function p2Mark() {
  let i = "";
  if (player1.mark === "X") {
    i = "O";
  } else {
    i = "X";
  }
  return i;
}

console.log(player1);
console.log(player2);
console.log(gameSquares);






// console.log(winning_player);
// Setting the text for the Player's banner and the Winner Banner.
document.getElementById("players").innerHTML = `The players for this match are: ${player1.name} vs. ${player2.name}`;
document.getElementById("winner").innerHTML = 'And the winner is.... ' + winning_player;


// document.getElementById("btn").addEventListener("click", currentMove());

// Creating click disable.
function currentMove() {
  $("#btn").on('click').button('toggle')
  $("btn").val(currentTurn)
}


function currentTurn() { // Sets the current move
  for (let m = 5; m > 0; m--) {
    if (m % 2 == 0) {
      player1.score++
      return player1.mark;
    } else //(m % 2 != 0) 
    {
      player2.score++
      return player2.mark;
      // } else {
      //   return winningScore('')

    }

  }
}

// function winningScore() {


//

// Computer players moves
// function p2Shuffle() {
//   gameSquares.push(gameSquares[Math.floor(Math.random() * gameSquares.length)]);
// }
currentMove()

$("#reset").on("click", () => {
  $("#btn").text("")
})

