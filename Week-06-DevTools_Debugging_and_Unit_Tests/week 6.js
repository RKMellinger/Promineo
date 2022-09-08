console.log("JS Final");
// classes to start functions, Card, Deck, and the game itself
//
//
// Player1 vs Player2 - When player wins they get a point, at end of string, display total.
// if/else statement for win loss, if array[index] value is greater it's a win.
// if/else statement to compare player 1 points and player 2 points to show the winner via alert.
let player1 = [];
let player2 = [];
let player1Points =0
let player2Points =0
let tie = 0
let winner = 0
let deckSize = 52;
let halfDeck = Math.ceil(deckSize / 2)
const SUITS = ["H", "D", "C", "S"]; //Suits array
const FACE = [
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
    return SUITS.flatMap((suit) => {
      return FACE.map((face) => {
        return new Cards(suit, face);
      });
    });

}
class Cards {
  //Framework for the cards
  constructor(suit, face) {
    this.suit = suit;
    this.face = face;
  }
}
  // showCard(){
  //   return `Suit: ${this.suit}, Face value is: ${this.face}`
  // }

class Deck {
  //Code to create the full deck
  constructor(cards = newDeck()) {
      this.cards = cards;
      this.deck = [];
  }
  shuffle() {
    for (let i = deckSize - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    } this.deck.push(this.cards)
  }
}
function Player() {
    for(let i=0; i<deckSize; i++){
      if(i % 2 === 0){
      player1.push(this.deck[i])
      }else {
      player2.push(this.deck[i])
      }

    }
  }

console.log(Player(player1))
console.log(Player(player2));
class CardGame {     //Starting menu for selections
  constructor(){
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
    gamePlay(){  //Menu option text
    return prompt(`
           ~~~~~~~~~~~~~~~~~~~~~~~~~~
           Greetings Program!!
           0) Exit
           1) Deal
           ~~~~~~~~~~~~~~~~~~~~~~~~~~
           `);
    }
    deal(){            //Will start game
      const VALUES = {
        "A": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13
      }
      return VALUES[card]
    }
  //   judge(){
 
  //     for (i = 0; i < 26; i++)
  //     If (player1Points > player2Points){
  //       winner = player1
  //     }else if (){

  //     }
  //   }
  // }
  
  


    //  for (i = 0; i < 26; i++)
    //     If ((player1[i] === deck[i]) > player2[i]  === deck[i])){
    //      player1Points++
    //     } else if ((player1[i] === deck[i]) > player2[i]  === deck[i])){
    //      player2Points++
    //     }else {
    //      tie++
    //     }
//     winner()
//     console.log(`
//     Player 1 total points: ${player1Points}
//     Player 2 total points: ${player2Points}
//     Total number of ties: ${tie}
//     The winner is ${winner}
//     `)
}


let menu = new CardGame() //Starts the prompts rolling
menu.start()

let freshDeck = new Deck()
console.log(freshDeck)
freshDeck.shuffle()
