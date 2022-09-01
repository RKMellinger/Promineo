//console.log ('Hello World')
// Workspace for week 5and other work.
console.log("Week 5 Object orientated coding assignment");
console.log(`1.	Create a menu app as seen in this week's video. 
What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.

`);

console.log(`Let's play a game... No really, I'm a big fan of tabletop gaming so what are we playing? D'n'D, Rifts, Eclipse Phase or even Warhammer 30/40k? 
The prompt should let you enter your game type, DND, WH40K, etc. then the view game will allow you to enter your name and class. Good luck traveler.
`)

// class Character{}//Pick your character name and class

// class Game{} //What table top game are we playing?

// class Menu{}//Starting menu for selections

class Character {   //Pick your character name and class
    constructor(characterName, characterClass){
        this.characterName = characterName
        this.characterClass = characterClass
    }

    describe(){
        return `Your champion's name is ${this.characterName} the ${this.characterClass}.`
    }
}
console.log(new Character("Bjorn", "Rune Priest"))
//
//

class Game {     //What table top game are we playing?
    constructor(name){
        this.name = name
    this.character = []
    }
}
//
class Menu {     //Starting menu for selections
  constructor() {
    this.game = [];
    this.selectedGame = null;
  }
//
  start() {  //Starts the menu process and it's selections
    let selection = this.mainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.addGame();
          break;
        case '2':
          this.displayGame();
          break;
        case '3':
          this.viewGame();
          break;
        case '4':
          this.removeGame();
          break;
        default:
          selection = 0;
      }
      selection = this.mainMenuOptions();
    }
    alert("Thank you, goodbye");
  }

  mainMenuOptions() {   //Menu option text
    return prompt(`
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Greetings Traveler!!
        0) Exit
        1) Add your game
        2) Display Games
        3) View a game
        4) Remove a game
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
  }
  gamesMenuOptions(gameInfo){  //Sub-menu options
    return prompt(`
    ~~~~~~~~~~~~~~~~~~~
    0) Back
    1) Create Character
    2) Delete Character
    ~~~~~~~~~~~~~~~~~~~
    ${gameInfo}
    `)
  }
  addGame(){  //Choose or create the game of choice
    let name = prompt(`Enter the game do you want to play.`)
    this.game.push(new Game(name))
  }
 
  displayGame(){ //Will display your selection
    let gameString = '';
    for (let i = 0; i < this.game.length; i++){
    gameString += i + ') ' + this.game[i].name + '\n';
   }
     alert (gameString);
  }
  
  createCharacter(){ // To create your player and their class
    let characterName = prompt(`What is your champion's name.`)
    let characterClass = prompt(`What is the champion's class.`)
    this.selectedGame.character.push(new Character(characterName, characterClass))
  }
  viewGame(){ // Displays the selected game and it's sub menu
    let index = prompt(`What is the index of your game.`)
    if(index > -1 && index < this.game.length){
        this.selectedGame = this.game[index]
        let description = `Your game of choice is: ${this.selectedGame.name}.        
        `
        
        
        for (let i = 0; i < this.selectedGame.character.length; i++){
            description += `\n ${i}) Your champion's is: ${this.selectedGame.character[i].characterName} the ${this.selectedGame.character[i].characterClass}.`
        }
        let selection = this.gamesMenuOptions(description) // Sub menu options
        switch (selection){
            case '1':
                this.createCharacter()
                break
            case '2':
                this.deleteCharacter()
        }
    }
  }
  removeGame(){ // Removes a game you don't want
    let index = prompt('Enter the game number to be removed')
    if (index > -1 && index < this.game.length){
      this.game.splice(index, 1)
    }
   }
  
  deleteCharacter(){ // Removes the player
    let index = prompt('Choose the number of the defeated champion.')
    if (index > -1 && index < this.selectedGame.character.length){
      this.selectedGame.character.splice(index, 1)
    }
  }
}

let menu = new Menu() //Starts the prompts rolling
menu.start()
