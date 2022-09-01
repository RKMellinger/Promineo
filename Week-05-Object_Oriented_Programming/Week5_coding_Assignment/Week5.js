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
The menu application is based on Casinos. When used it should allow the user to add/view/remove 
the Parent corporation and the submenus should be the related casinos and their locations.
`)

class Casino {
    constructor(casinoName, location){
        this.casinoName = casinoName
        this.location = location
    }

    describe(){
        return `${this.casinoName} plays ${this.location}`
    }
}
class Parent {
    constructor(parentCorp){
        this.parentCorp = parentCorp
    this.casinos = []
    }

    addPlayer(casinos){
        if(casinos instanceof Casino) {
            this.casinoName.push(casinos)
        }else {
            throw new Error(`Invalid Entry`)
        }
    }
    describe(){
        return `${this.parentCorp} has ${this.casinos.length} locations.`
    }
}

class Menu { 
  constructor() {
    this.parent = [];
    this.selectedParent = null;
  }

  start() {
    let selection = this.mainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.addParent();
          break;
        case '2':
          this.displayParent();
          break;
        case '3':
          this.viewParent();
          break;
        case '4':
          this.removeParent();
          break;
        default:
          selection = 0;
      }
      selection = this.mainMenuOptions();
    }
    alert("Thank you, goodbye");
  }

  mainMenuOptions() {
    return prompt(`
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        0) Exit
        1) Add Parent Corporation
        2) Display Parent Corporation
        3) View Parent Corporation
        4) Remove Parent Corporation
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
  }
  casinoMenuOptions(casinoInfo){
    return prompt(`
    ~~~~~~~~~~~~~~~~~~~
    0) Back
    1) Add Casino
    2) Delete Casino
    ~~~~~~~~~~~~~~~~~~~
    ${casinoInfo}
    `)
  }
 addParent(){
      let name = prompt(`Enter new Casino name`)
    this.parent.push(new Casino(name))
  }
  displayParent(){
    let casinoList = "";
    for (let i = 0; i < this.parent.length; i++){
    casinoList += (1 + i) + ') ' + this.parent[i].name + '\n';
    }
    alert (casinoList);
  }
 
  viewParent(){
    let index = prompt(`Enter the Corporate index.`)
    if(index > -1 && index < this.parent.length){
        this.selectedParent = this.parent[index]
        let description = 'Corporate Name: ' + this.selectedParent.name + '\n'

        for (let i = 0; i < this.selectedParent.casinos.length; i++){
            description += (1 + i) + ') ' + this.selectedParent.casinos[i].name 
            + ' - ' + this.selectedParent.casinos[i].location + '\n'
        }
        let selection = this.casinoMenuOptions(description)
        switch (selection){
            case '1':
                this.createCasino()
                break
            case '2':
                this.deleteCasino()
        }
    }
  }
}

let menu = new Menu()
menu.start()



