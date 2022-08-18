let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);

// print the last element in array1
console.log(array1[5]);
//console.log(array1[array1.length-2]);

// add 16 and 3 to array1
//console.log(array1[2]+ 16);
//array1.push(16, 3);
// sort the array, then print the 3rd element again
array1.sort();
console.log(array1[2]);
// did it change? No

// create a variable called myTodoList that holds an empty array
let myTodoList = [];

// add three todo items to the array using a built-in array method
myTodoList.push("Learn Coding");
myTodoList.push("Finish Lego set");
myTodoList.push("Finish miniatures");
console.log(myTodoList);

// remove the second item in the array
console.log(myTodoList.indexOf("Finish Lego set"));
//console.log(myTodoList.splice(1))

// create another array, yourTodoList, and add two todo items
let yourTodoList = ["Paint one art", "Finish table"];
console.log(yourTodoList);

// create another array, ourTodoList
let ourTodoList = [];

// combine myTodoList and yourTodoList into ourTodoList
ourTodoList = myTodoList.concat(yourTodoList);
ourTodoList.sort();
console.log(ourTodoList);
// sort the following array from Z-A
//ourTodoList.reverse();
//console.log(ourTodoList)

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse(i) {
  if (typeof i === "boolean") {
    console.log(!i);
  } else if (typeof i === "number" || typeof i === "string") {
    let digits = ("" + i).split("");
    digits.reverse();
    console.log(digits.join(""));
  } else typeof i === "array";
  {
    i.reverse();
    console.log(i);
  }
}

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine() {
  let a = 0;
  for (let b = 0; b < arguments.length; b++) {
    let c = arguments[b];
    a += c;
  }
  return a;
}
console.log(addingMachine(1, 2, 3, 4, 5, 6, 7, 7, 9, 4, 2344, 112, 34343, 234));
// You just signed a contract as an estimator for a restoration company.
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin
