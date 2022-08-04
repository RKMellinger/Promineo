console.log ('Hello World')
// Workspace for week 2 labs and other work.

let money = 5;
let coffeeCost = 10;


if(money >= coffeeCost){
    console.log ('I can buy a cup of coffee')
} else {
    console.log('make it at home')
}

let grade = "No";
let letterGrade;

switch(true){
  case grade >= 90: 
    letterGrade = "A";
    break;
  case grade < 90 && grade >= 80:
    letterGrade = "B";
    break;
  case grade < 80 && grade >= 70:
    letterGrade = "C";
    break;
    case grade < 70 && grade >= 60:
      letterGrade = "D";
      break;
    case grade < 60 && grade >= 50:
      letterGrade = "FFFFF";
      break;
    default:
        console.log('Enter a valid score');



}

console.log(letterGrade)