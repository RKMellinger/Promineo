class Player {
  // Player descriptions
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }
}

// Clearing the test text from the grid.
// $("top-left").val("");
// $("top-middle").val("");
// $("top-right").val("");
// $("center-left").val("");
// $("center-middle").val("");
// $("center-right").val("");
// $("bottom-left").val("");
// $("bottom-middle").val("");
// $("bottom-right").val("");

$("winner").val("");

let names = [
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

let gameSquares = [
  $("top-left"),
  $("top-middle"),
  $("top-right"),
  $("center-left"),
  $("center-middle"),
  $("center-right"),
  $("bottom-left"),
  $("bottom-middle"),
  $("bottom-right"),
];

let marks = ["X", "O"]
let winning_player = "";

let player1 = new Player(
  prompt(`Please enter your name. ${this.name}`),
  prompt('Please type "X" or "O".' + this.mark)
);
player1.mark = p1Mark()

function p1Mark() { // forces capitol letters only and assigns a random mark if an invalid choice is made.
  if (player1.mark === "X" || player1.mark === "O") {
    return player1.mark;
  } else if (player1.mark === "x") {
    return (player1.mark = "X");
  } else if (player1.mark === "o") {
    return (player1.mark = "O");
  } else {
    alert("invalid choice, your mark will be assigned.");
    return (player1.mark = marks[Math.floor(Math.random() * marks.length)])
  }
}

let player2 = new Player(
  names[Math.floor(Math.random() * names.length)],
  (this.mark = p2Mark())
); // Assigns a random name and the opposite mark to player2.

console.log(player1);
console.log(player2);
console.log(gameSquares[1]);


function p2Mark() {
  // Function for determining player1's mark.
  let i = "";
  if (player1.mark === "X" || player1.mark === "x") {
    i = "O";
  } else {
    i = "X";
  }
  return i;
}

winning_player = player1.name;

console.log(winning_player);
// Setting the text for the Player's banner and the Winner Banner.
document.getElementById("players").innerHTML = `The players for this match are: ${player1.name} vs. ${player2.name}`;
document.getElementById("winner").innerHTML = ('And the winner is.... ' + winning_player);

// Creating the x or o insert.
function currentMove() {
  for (let m = gameSquares.length; m > 0; m--) {
    if (m % 2 == 0) {
      return player1.mark;
    } else {
      return player2.mark;
    }

  }
}


// document.getElementById("btn").addEventListener("click", currentMove);

// Computer players moves
// function p2Shuffle() {
//   gameSquares.push(gameSquares[Math.floor(Math.random() * gameSquares.length)]);
// }

