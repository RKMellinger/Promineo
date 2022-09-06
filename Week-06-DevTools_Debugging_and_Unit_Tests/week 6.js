console.log("JS Final")
//
// Player1 vs Player2 - When player wins they get a point, at end of string, display total.
// Make ranking be array index.
// if/else statement for win loss, if index value is greater it's a win.
let player1 =[]
let player2 =[]
const suits = ["♥","♦","♣","♠"] //Suits array
const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"] // Card Value
//
function newDeck(){ // Creating deck of cards
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Cards(suit, value)
        })
    }) 
    
}

//
class Cards { //Framework for the cards
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}

class Deck { //Code to create the full deck
    constructor(cards = newDeck()){
        this.cards = cards    
        this.deck = []   
    }
    

    }
    function shuffle(){ //randomly swap card for card
        for (let i = 0; i < deck.length + 1; i++ ){
            let firstPosition = Math.floor(Math.random() * (i + 1))
            let oldPosition = this.cards[firstPosition]
            this.cards[firstPosition] = this.cards[i]
            this.cards[i] = oldPosition
        }        
    }


// class CardGame {     //Starting menu for selections
//     constructor() {
//       this.deck = [];
//       this.currentGame = null;
//     }
  
// function start() {  //Starts the the game
    
//     const halfDeck =Math.ceil(deckSize / 2)
//     player1 = new Deck(Deck.cards.splice(0,halfDeck))
//     player2 = new Deck(Deck.cards.splice(halfDeck, deckSize))

//     console.log(player1)
//     console.log(player2)
// }

//       let selection = this.gamePlay();
//       while (selection != 0) {
//         switch (selection) {
//           case '1':
//             this.deal();
//             break;
//             default:
//             selection = 0;
//         }
//         selection = this.gamePlay();
//       }
//       alert("Thank you, goodbye");
//     }
  
//     gamePlay() {   //Menu option text
//       return prompt(`
//           ~~~~~~~~~~~~~~~~~~~~~~~~~~
//           Greetings!!
//           0) Exit
//           1) Deal        
//           ~~~~~~~~~~~~~~~~~~~~~~~~~~
//           `);
//     }

    
   
//     deal(){ //Will start game
//       let deck = new Deck()
//       suits.shuffler
//     }
//     judge(){
//         If 
//     }

//   }
  


//   let menu = new Menu() //Starts the prompts rolling
//   menu.start()
let fullDeck = new Deck()
shuffle(fullDeck)
console.log(fullDeck.cards)
// start(fullDeck.cards)

