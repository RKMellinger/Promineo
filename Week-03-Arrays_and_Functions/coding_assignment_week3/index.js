console.log("Create an array called ages ");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(
  "Programmatically subtract the value of the first element in the array from the value in the last element"
);
console.log(ages);
console.log(ages[0] - ages[ages.length - 1]);
console.log(
  "Add a new age to your array and repeat the step above to ensure it is dynamic"
);
ages.push(19);
console.log(ages);
console.log(ages[0] - ages[ages.length - 1]);
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

//
console.log("\n\nCreate an array called names ");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log('names array: "' + names + '"');
console.log(
  "Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console."
);

console.log(
  "Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console."
);
console.log("\n\nHow do you access the last element of any array?");
console.log(
  "  A: arrayName[arrayName.length-1], call the array then using '.length' then minus 1 to account for the 0 start of the array.\n\n"
);
console.log("How do you access the first element of any array?");
console.log(
  "  A: arrayName[0] will reference the first position of the array before and after sorting as 0 is always first.\n\n"
);
//
console.log("Create a new array called nameLengths.");
let namesLength = [];
//
