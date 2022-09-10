class Player { // Player descriptions
  constructor(name) {
      this.name = name
      this.score = 0;
      this.hand = [];
  }
}
let names = ["Stockfish 13","Fat Fritz 2","Komodo Dragon","Igel 3.0.5","RubiChess 2.1","Houdini 6","Deep Blue"]
let player1 = new Player(names[Math.floor(Math.random()*names.length)]) 
let player2 = new Player(names[Math.floor(Math.random()*names.length)]) // Assigns a random name to the player

console.log(`Lets play some Chess, er.. War... 
Before you are some of the greatest computer chess playing programs of all time.
This round's combatants are:`);
console.log(`Player1: ${player1.name} starting score is: ${player1.score}`) 
console.log(`Player2: ${player2.name} starting score is: ${player2.score}`)

let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']; //Card components
let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let fullDeck = 52
let playerDecks = 26


class Card { // Card builder
  constructor(faces, suit, value) {
      this.faces = faces;
      this.suit = suit;
      this.value = value;
  }
}
let tie = 0
let totalTies = 0

let player1Points = 0
let player2Points = 0
class Deck { //the Deck builder 
  constructor() {
      this.deck = []; 
      this.winner = ""


  }

  createDeck() { //creates the deck
      for (let facesIndex = 0; facesIndex < faces.length; facesIndex++) {
          for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
              this.deck.push(new Card(faces[facesIndex], suits[suitsIndex], value[facesIndex]));
          }
      }
  }
  shuffle() { //ShuffleMaster 
          for (let i = 52 -1; i > 0; i--) { 
            let j = Math.floor(Math.random() * i)
            let k = this.deck[i]
            this.deck[i] = this.deck[j]
            this.deck[j] = k
    }
  }
  dealDeck() { // Deals the on 52 card deck into two 26 player decks
      player1.hand = (this.deck.slice(0, 26));
      player2.hand = (this.deck.slice(26, 52))
      // for(let i=0; i<26; i++){
      //   if(i % 2 === 0){
      //   player1.hand.push(this.deck);
      //   }else{
      //   player2.hand.push(this.deck)
      //   }

      //console.log("line 56",player1.hand[0]);

      //}
      // console.log(`${player1.name}'s hand is:
      // ${player1.hand}`)
      // console.log(`${player2.name}'s hand is:
      //  ${player2.hand}`)
      console.log("\nGood luck players, here we go.\n");
    }
  scoreCard(){
      for (let i = 0; i < 26; i++){
        if (player1.hand[i].value > player2.hand[i].value) {
          console.log("And the draw",player1.hand[i],player2.hand[i])
          console.log(`${player1.name} wins!`)
          player1.score += 1     
//          console.log(player1.score);   
        }else if (player1.hand[i].value < player2.hand[i].value){
          player2.score += 1
          console.log(`${player2.name} wins!`)         
          console.log("And the draw",player1.hand[i],player2.hand[i])
//          console.log(player2.score); 
        }else {
          tie += 1
          console.log("And the draw",player1.hand[i],player2.hand[i])
          console.log(`It's a tie!!`)
        }
        console.log(`The score is:
        ${player1.name}: ${player1.score}
        ${player2.name}: ${player2.score}
        And a total of ${tie} ties!`)

     }

  }
  winning(){
          if (player1.score > player2.score && player1.score > tie) {
            this.winner = player1.name
          }else if (player1.score < player2.score && player2.score > tie){
            this.winner = player2.name
          }else {
            this.winner = ("It's a tie")            
          }
          console.log(player1.name + " total points: "+ player1.score + "\n" + 
          player2.name + " total points: "+ player2.score + "\n" + "Total number of ties: "+ 
          tie + "\n")
          console.log("The winner is: " + this.winner + "!!!!!")
          console.log(this.winner + " takes the prize!!!")
        }

}


//     }
//   }
// }


let freshDeck = new Deck();
freshDeck.createDeck();
freshDeck.shuffle()
freshDeck.dealDeck();
freshDeck.scoreCard()
freshDeck.winning()
