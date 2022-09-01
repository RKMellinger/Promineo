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

    addPlayer(player){
        if(player instanceof Player) {
            this.players.push(player)
        }else {
            throw new Error(`Invalid Entry`)
        }
    }
    describe(){
        return `${this.name} has ${this.players.length} players`
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
    teamString += (1 + i) + ') ' + this.teams[i].name + '\n';
    }
    alert (teamString);
  }
  createTeam(){
      let name = prompt(`Enter new team name`)
    this.teams.push(new Team(name))
  }
  viewTeam(){
    let index = prompt(`Enter the index of the team.`)
    if(index > -1 && index < this.teams.length){
        this.selectedTeam = this.teams[index]
        let description = 'Team Name: ' + this.selectedTeam.name + '\n'

        for (let i = 0; i < this.selectedTeam.player.length; i++){
            description += i + ') ' + this.selectedTeam.players[i].name 
            + ' - ' + this.selectedTeam.players[i].position + '\n'
        }
        let selection = this.showTeamMenuOptions(description)
        switch (selection){
            case '1':
                this.createPlayer()
                break
            case '2':
                this.deletePlayer()
        }
    }
  }
}

let menu = new Menu()
menu.start()
