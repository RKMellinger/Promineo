console.log("JS Final");
// classes to start functions, Card, Deck, and the game itself
//
//
// Player1 vs Player2 - When player wins they get a point, at end of string, display total.
// if/else statement for win loss, if array[index] value is greater it's a win.
// if/else statement to compare player 1 points and player 2 points to show the winner via alert.

let deckSize = 52;
let halfDeck = Math.ceil(deckSize / 2)
const suits = ["H", "D", "C", "S"]; //Suits array
const face = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"]; // Card face
 
//
function newDeck() {
    // Creating deck of cards
    return suits.flatMap((suit) => {
      return face.map((face) => {
        return new Cards(suit, face);
      });
    });

  }




// player1 = deck.splice().push(0,halfDeck)
// player2 = deck.splice().push(halfDeck, deckSize)

// console.log(player1)
// console.log(player2)

    class Cards {
  //Framework for the cards
  constructor(suit, face) {
    this.suit = suit;
    this.face = face;
  }
  showCard(){
    return `Suit: ${this.suit}, Face value is: ${this.face}`
  }
}
shuffleMaster = cards => {
  for(let i = deckSize-1; i>0; i--) {
       const j = Math.floor(Math.random() * (i + 1))
       const temp = cards[i]
       cards[i] = cards [j]
       cards[j] = temp
  } deck.push(cards)
}
class Deck {
  //Code to create the full deck
  constructor(cards = newDeck()) {
    this.cards = cards;
    this.deck = [];
  } 

}

class CardGame {     //Starting menu for selections
    constructor() {
    let player1 = [];
    let player2 = [];
    let player1Points =0
    let player2Points =0
    let tie = 0
    let winner = 0
  }
  start() {  //Starts the the game
  let selection = this.gamePlay();
      while (selection != 0) {
        switch (selection) {
          case '1':
             this.deal();
             break;
          default:
            selection = 0;
         }
         selection = this.gamePlay();
      }
       alert("Thank you, goodbye");
  }

  gamePlay() {   //Menu option text
    return prompt(`
           ~~~~~~~~~~~~~~~~~~~~~~~~~~
           Greetings Program!!
           0) Exit
           1) Deal
           ~~~~~~~~~~~~~~~~~~~~~~~~~~
           `);
  }
//     deal(){              //Will start game
//    player1 = new Deck(this.deck.split(0,halfDeck))
//    player2 = new Deck(this.deck.split(halfDeck, deckSize))
//    }


//     judge(){
//      for (i = 0; i < 26; i++)
//         If ((player1[i] === deck[i]) > player2[i]  === deck[i])){
//          player1Points++
//         } else if ((player1[i] === deck[i]) > player2[i]  === deck[i])){
//          player2Points++
//         }else {
//          tie++
//         }
//     winner(){
//        If (player1Points > player2Points){
//           winner = player1
//        } else if (player1Points < player2Points){
//           winner = player2
//        } else {
//           winner = "We have a problem"
//          }
//         }
//     console.log(`
//     Player 1 total points: ${player1Points}
//     Player 2 total points: ${player2Points}
//     Total number of ties: ${tie}
//     The winner is ${winner}
//     `)
//     }
}

//   let menu = new Menu() //Starts the prompts rolling
//   menu.start()
// let fullDeck = new Deck(this.deck);

console.log(shuffleMaster(deck));
// start(fullDeck.cards)