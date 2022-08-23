//Question 1
console.log("Create an array called ages ");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// Question 1a
console.log(
  "Programmatically subtract the value of the first element in the array from the value in the last element"
);
console.log(ages);
console.log(ages[0] - ages[ages.length - 1]);
// Question 1b
console.log(
  "Add a new age to your array and repeat the step above to ensure it is dynamic"
);
ages.push(19);
console.log(ages);
console.log(ages[0] - ages[ages.length - 1]);
// Question 1 c
console.log(
  "Use a loop to iterate through the array and calculate the average age"
);
function ageAvg(ages) {
  let avg = 0;
  for (let i = 0; i < ages.length; i++) {
    avg += ages[i];
  }
  return avg / ages.length;
}
console.log(ageAvg(ages));

// Question 2
console.log("\n\nCreate an array called names ");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);
//
// Question 2a
console.log(
  "Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console."
);
let sum1 = 0;
console.log(names.length);
names.forEach(function (name) {
  sum1 += name.length;
});
console.log(sum1 / names.length);
//
// Question 2b
console.log(
  "Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console."
);
let letter1 = "";
for (i = 0; i < names.length; i++) {
  letter1 += names[i] + " ";
}
console.log(letter1);
// Question 3
console.log("\n\nHow do you access the last element of any array?");
console.log(
  "  A: arrayName[arrayName.length-1], call the array then using '.length' then minus 1 to account for the 0 start of the array.\n\n"
);
//question 4
console.log("How do you access the first element of any array?");
console.log(
  "  A: arrayName[0] will reference the first position of the array before and after sorting as 0 is always first.\n\n"
);
// Question 5
console.log(
  "Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."
);
console.log(names);
let namesLengths = [];
names.forEach(function (name) {
  namesLengths.push(name.length);
});
console.log(namesLengths);
// Question 6
console.log(
  "Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console."
);

// Question 7
console.log(
  "Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times."
);
// function concatWords(word, n)

/* Question 8
console.log(
  "Write a function that takes two parameters, firstName and lastName, and returns a full name"
);
// Question 9
console.log(
  "Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."
);
// Question 10
console.log(
  "Write a function that takes an array of numbers and returns the average of all the elements in the array."
);
// Question 11
console.log(
  "Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array"
);
// Question 12
console.log(
  "Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50."
);
// Question 13
console.log("Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
*/
