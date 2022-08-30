//console.log ('Hello World')
// Workspace for week 5 labs and other work.
console.log("Week 5 Object orientated coding assignment");
console.log(`1.	Create a menu app as seen in this week's video. 
What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.

`);
//

class Casino { //Format for Casino storage
  constructor(name) {
    this.casinoName = [name];
  }

  introduce() {
    console.log(`${this.casinoName}.`);
  }
}
// let casino1 = new Casino("MGM"); // for testing 
// casino1.introduce(); //Shows MGM


class Menu { //Main menu details and operations
  constructor() {
    this.casino = [];
    this.selectedCasino = null;
  }

  start() { //Menu options
    let selection = this.menuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.addCasino();
          break;
        case "2":
          this.viewCasino();
          break;
        case "3":
          this.deleteCasino();
          break;
        case "4":
          this.displayCasino();
          break;
        default:
          selection = 0;
      }
      selection = this.menuOptions();
    }
    alert("Thank you, goodbye");
  }

  menuOptions() {
    return prompt(`
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        0) Exit
        1) Add Casino
        2) View Casino Details
        3) Remove Casino
        4) Display Casino Listing
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
  }

  displayCasino() { //menu functions
    let casinoList = "";
    for (let i = 0; i < this.casino.length; i++) {
      casinoList = casinoList[i] + ") " + this.casinoName[i].name + "\n";
    }

    alert(casinoList);
  }

  addCasino() {
    let name = prompt("Enter Casino name");
    this.casino.push(new Casino(name));
  }

  viewCasino() {
    let index = prompt("Please enter casino index.");
    if (index > -1 && index < this.casino.length) {
      this.selectedCasino = this.casino[index];
      let description = "Casino Name:" + this.selectedCasino.name + "\n";

      for (let i = 0; i < this.selectedCasino.casinoName.length; i++) {
        description = description +(i + 1) +") " + this.selectedCasino.casinoName[i].name + "\n";
      }
    }
  }
  deleteCasino(){
      let index = prompt('Please enter Casino index for removal.')
      if (index > -1 && index < this.casino.length){
        casino.splice[index, 1]
      }  
    }
  
//Sub menu functions

  //   casinoMenu(casinoInformation) { 
  //     return prompt(`
  //     ~~~~~~~~~~~~~~~~~
  //     0) Back
  //     1) Create New Feature
  //     2) Delete Feature
  //     ~~~~~~~~~~~~~~~~~`);
  //   }
  
  // let selection = this.casinoMenu(description);
    // switch (selection) {
    //   case "1":
    //     this.addCasino();
    //     break;
    //   case "2":
    //     this.deleteCasino();
    // }
}

let menu = new Menu();
menu.start();

console.log(Menu.casino);
