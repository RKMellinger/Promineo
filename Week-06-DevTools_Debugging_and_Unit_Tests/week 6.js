class Player {
  constructor(name) {
      this.name = name
      this.score = 0;
      this.hand = [];
  }
}
let names = ["Stockfish 13","Fat Fritz 2","Komodo Dragon","Igel 3.0.5","RubiChess 2.1","Houdini 6","Deep Blue"]
let player1 = new Player(names[Math.floor(Math.random()*names.length)])
let player2 = new Player(names[Math.floor(Math.random()*names.length)])

console.log("line 31", player1.name, player1.score, player1.hand)
console.log("line 32", player2.name, player2.score, player2.hand)

let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
console.log(faces.length);
let suits = ['hearts', 'diamonds', 'spades', 'clubs'];
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log("line 19",value.length);

class Card {
  constructor(faces, suit, value) {
      this.faces = faces;
      this.suit = suit;
      this.value = value;
  }
}

class Deck {
  constructor() {
      this.deck = []; 
      this.tie = 0
      this.winner = ""
  }

  createDeck() {
      for (let facesIndex = 0; facesIndex < faces.length; facesIndex++) {
          for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
              this.deck.push(new Card(faces[facesIndex], suits[suitsIndex], value[facesIndex]));
          }
      }
  }
  shuffle() {
          for (let i = 52 -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = this.card[i]
            this.card[i] = this.card[j]
            this.card[j] = k
    }
  }
  dealDeck() {
      player1.hand.push(this.deck.slice(0, 26)); //for loop
      player2.hand.push(this.deck.slice(26, 52))
      console.log("line 52",player1.hand)
      console.log("line 53",player2.hand)

  }
  scoreCard(){
      for (let i = 0; i < 26; i++){
        if (player1.cards[value[i]]>player2.cards[value[i]]) {
          player1.score + 1        
        }else if (player1.cards[value[i]]<player2.cards[value[i]]){
          player2.score + 1
        }else {
          this.tie + 1
        }
        console.log(player1.score,player2.score,this.tie)
     }
  }
  // winning(){
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


let freshDeck = new Deck();
freshDeck.createDeck();
freshDeck.dealDeck();
freshDeck.scoreCard()