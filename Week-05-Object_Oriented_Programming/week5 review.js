class Player {
    constructor(name, position){
        this.name = name
        this.position = position
    }

    describe(){
        return `${this.name} plays ${this.position}`
    }
}
class Team {
    constructor(name){
        this.name = name
    this.player = []
    }
}

class Menu { 
  constructor() {
    this.teams = [];
    this.selectedTeam = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createTeam();
          break;
        case '2':
          this.viewTeam();
          break;
        case '3':
          this.deleteTeam();
          break;
        case '4':
          this.displayTeam();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("Thank you, goodbye");
  }

  showMainMenuOptions() {
    return prompt(`
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        0) Exit
        1) Add Team
        2) View Team
        3) Delete Team
        4) Display Team
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        `);
  }
  showTeamMenuOptions(teamInfo){
    return prompt(`
    ~~~~~~~~~~~~~~~~~~~
    0) Back
    1) Create Player
    2) Delete Player
    ~~~~~~~~~~~~~~~~~~~
    ${teamInfo}
    `)
  }

  displayTeam(){
    let teamString = '';
    for (let i = 0; i < this.teams.length; i++){
    teamString += i + ') ' + this.teams[i].name + '\n';
    }
    alert (teamString);
  }
  createTeam(){
    let name = prompt(`Enter new team name`)
    this.teams.push(new Team(name))
  }

  createPlayer(){
    let name = prompt('Enter name for new player.')
    let position = prompt('Please enter position for new player.')
    this.selectedTeam.player.push(new Player(name, position))
  }
  viewTeam(){
    let index = prompt(`Enter the index of the team.`)
    if(index > -1 && index < this.teams.length){
        this.selectedTeam = this.teams[index]
        let description = 'Team Name: ' + this.selectedTeam.name + '\n'

        for (let i = 0; i < this.selectedTeam.player.length; i++){
            description += i + ') ' + this.selectedTeam.player[i].name 
            + ' - ' + this.selectedTeam.player[i].position + '\n'
        }
        let selection = this.showTeamMenuOptions(description)
        switch (selection){
            case '1':
                this.createPlayer()
                break
            case '2':
                this.deletePlayer()
        }4
    }
  }
  deleteTeam(){
    let index = prompt('Enter the index of Team to delete')
    if (index > -1 && index < this.teams.length){
      this.teams.splice(index, 1)
    }
   }
  
  deletePlayer(){
    let index = prompt('Enter the index of player to delete')
    if (index > -1 && index < this.selectedTeam.player.length){
      this.selectedTeam.player.splice(index, 1)
    }
  }
}

let menu = new Menu()
menu.start()
