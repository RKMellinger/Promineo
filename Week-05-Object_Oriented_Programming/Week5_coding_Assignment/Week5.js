//console.log ('Hello World')
// Workspace for week 5 labs and other work.
console.log("Week 5 Object orientated coding assignment");
console.log(`1.	Create a menu app as seen in this week's video. 
What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.

`);

console.log(`
The menu application is based on Casinos. When used it should allow the user to add/view/remove Casino information. 
The "View Casino" option should also allow a sub menu for the selected casino see any features that are added into 
the system.
`)

class Casino { //Main menu option for Casinos database
  constructor(PropertyName) {
    this.casinoName = [PropertyName];
  }
  introduce() {
    console.log(`${this.casinoName}.`);
  }
}
class Features{ // Casino features to be added
  constructor(casinoFeature){
  this.feature =[casinoFeature]
  }
}

class Menu { //Main menu details and operations
  constructor() {
    this.casino = [];
    this.selectedCasino = null;
//    console.log(this.casino)
    // this.casino.push(new Casino("MGM"))
  }


  start() { //Menu options
    let selection = this.menuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.addCasino();
          break;
        case "2":
          this.displayCasino();
          break;
        case "3":
          this.viewCasino();
          break;
        case "4":
          this.deleteCasino();
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
        2) Display Casino Listing
        3) View Casino Details
        4) Remove Casino
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
  }

  addCasino() {
    let name = prompt("Enter Casino name");
    this.casino.push(new Casino(name));
  }

  displayCasino() { //menu functions
    let casinoList = "";
    for (let i = 0; i < this.casino.length; i++) {
      casinoList = casinoList[i] + ") " + this.casino[i].name + "\n";
    }
  
    alert(casinoList);
  }

  viewCasino() {
    let index = prompt("Please enter casino index.");
    if (index > -1 && index < this.casino.length) {
      this.selectedCasino = (new Casino(this.casino[index]));
      let description = "Casino Name:" + this.selectedCasino.name + "\n";

      for (let i = 0; i < this.selectedCasino.casino.name.length; i++) {
        description = description +[i] +") " + this.selectedCasino.casino[i].name + "\n";
      }
    }
  }
  deleteCasino(){
      let index = prompt('Please enter Casino index for removal.')
      if (index > -1 && index < this.casino.length){
        this.casino.splice[index, 1]
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
    //     this.addFeature();
    //     break;
    //   case "2":
    //     this.deleteFeature();
    // }
}

console.log(new Menu(this.casino)); //


let menu = new Menu();
menu.start();


