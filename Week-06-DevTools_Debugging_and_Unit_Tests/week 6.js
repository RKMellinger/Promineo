class Player { // Player descriptions
  constructor(name) {
      this.name = name
      this.score = 0;
      this.hand = [];
  }
}
let names = ["Stockfish 13","Fat Fritz 2","Komodo Dragon","Igel 3.0.5","RubiChess 2.1","Houdini 6","Deep Blue"]
let player1 = new Player(names[Math.floor(Math.random()*names.length)]) // Lets play Chess, er.. War...
let player2 = new Player(names[Math.floor(Math.random()*names.length)]) // Assigns a random name to the player

console.log("line 31", player1.name, player1.score, player1.hand) 
console.log("line 32", player2.name, player2.score, player2.hand)

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

class Deck { //the Deck builder 
  constructor() {
      this.deck = []; 
      this.tie = 0
      this.winner = ""
      let player1Points = 0
      let player2Points = 0
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
            let k = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = k
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
      console.log("line 54",player1.hand)
      console.log("line 55",player2.hand)
    }
  scoreCard(){ // Compares the decks from player 1 and player 2 to determine the winner.
      // for(let card1 of player1.hand){
      //   console.log(card1.length)
      //   console.log("line 60 player 1",card1.value)
      //   for(let card2 of player2.hand){
      //     console.log("line 62 player 2",card2.value)
      //   }
      // }
      for (let i = 0; i < playerDecks; i++){
        //console.log("line 68",player1.hand[0]);
        if (player1.hand[i]>player2.hand[i]) {
          console.log('line 70',player1.hand[0],player2.hand[0])
          this.player1Points + 1        
        }else if (player1.hand[0]<player2.hand[0]){
          this.player2Points + 1
        }else {
          this.tie + 1
        }
        console.log(player1.score,player2.score,this.tie)
     }
  }
  // winning(){ //The script for displaying the game and winner.
  //     if (player1.score>player2.score && player1.score>this.tie) {
  //     this.winner = player1
  //       }else if (player1.score< player2.score && player2.score>this.tie){
  //         this.winner = player2
  //       }else if (player1.score< player2.score && player2.score>this.tie){
  //         this.winner = this.tie
  //       }else{
  //         alert ('ERROR!!!!!')
  //       }
  //    console.log(`
  //    Player 1 total points: ${this.player1.score}
  //    Player 2 total points: ${this.player2.score}
  //    Total number of ties: ${this.tie}`
  //    `The winner is ${this.winner}
  //    `)
  // }
}
// console.log("line 88", player1.deck)

let freshDeck = new Deck();
freshDeck.createDeck();
//freshDeck.shuffle()
freshDeck.dealDeck();
freshDeck.scoreCard()