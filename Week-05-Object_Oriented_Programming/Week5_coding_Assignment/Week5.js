//console.log ('Hello World')
// Workspace for week 5 labs and other work.
console.log('Week 5 Object orientated coding assignment')
console.log(`1.	Create a menu app as seen in this week's video. 
What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
c.	Your menu should have the options to create, view, and delete elements.

`)
//


class Corporation{
    constructor(corporation, name, location, type){
        this.parentCorporation = corporation
        this.casinoName = [name]
        this.casinoLocation = [location]
        this.typeOfCasino = [type]
    }

    introduce(){
        console.log(`${this.casinoName} is located ${this.casinoLocation} and is a ${this.typeOfCasino} casino which is owned by ${this.parentCorporation}.`)
    }
}
let casino1 = new Corporation('MGM','MGM Grand','on strip','tourist resort')
let casino2 = new Corporation('Boyd Gaming','The Orleans','off-strip','locals')
let casino3 = new Corporation('Stations Casinos','Sunset Station','off-strip','locals')
let casino4 = new Corporation('Caesars Entertainment','Caesars Palace','on strip','tourist')

casino1.introduce()
casino2.introduce()
casino3.introduce()
casino4.introduce()





class Menu{
    constructor (){
        this.casino = []
        this.selectedCasino = null
    }

    start(){
         let selection = this.mainMenuOptions()
             while(selection !=0){
                switch(selection){
                    case '1':
                    this.addCasino();
                    break
                case '2':
                    this.viewCasino()
                    break
                case '3':
                    this.deleteCasino()
                    break
                case '4':
                    this.displayCasino()
                    break
                default:
                selection = 0
            }
        selection = this.mainMenuOptions()
        }
    alert('Thank you, goodbye')
    }
    mainMenuOptions(){
        return prompt(`
        0) Exit
        1) Add Casino
        2) View Casino Details
        3) Remove Casino
        4) Display Casino Listing
        `)
    }
    displayCasino(){
        let casinoList = ''
        for (let i = 0; i < this.casinoList.length; i++){
            casinoList += i + ') ' + this.casino[i].name + '\n';
        }


    }
}

