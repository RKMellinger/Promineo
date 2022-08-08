//create a variable to hold the quantity of available plane seats left on a flight.
let numberOfPlaneSeat = 6;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
let middleInitial = "R";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = false;
//create a variable to hold a customer's first name
var customerFirstName = "John";

//create a variable to hold a street address
let address = "132 w. 23rd st"; 


//print all variables to the console
console.log (numberOfPlaneSeat);
console.log (costOfGroceries);
console.log (middleInitial);
console.log (isHotOutside);
console.log (customerFirstName);
console.log (address);





//a customer booked 2 plane seats, remove 2 seats from the available seats variable
numberOfPlaneSeat = numberOfPlaneSeat -2;
console.log(numberOfPlaneSeat);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 2.15;
console.log (costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "Q";
console.log (middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = true;
console.log (isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let customerName = customerFirstName +" "+ middleInitial + " Sanchez";
console.log (customerName);

//print a line to the console that introduces the customer and says they live at the address variable

console.log("Hi, my name is "+ customerName +" and I live at "+ address + ".");