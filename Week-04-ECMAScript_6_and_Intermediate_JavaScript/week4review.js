/*
function createFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function doubleNumber(number) {
  return number * 2;
}

function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

let createFullName = (firstName, lastName) => firstName +" "+ lastName

let doubleNumber = (number) => number * 2

let evenNumbers
let someArray = [1,2,3,4,5,6,7,8]
let getEvenNumbers = (array) => array.filter(evenNumbers => evenNumbers % 2 === 0) ;

console.log(getEvenNumbers(someArray))// 2, 4, 6, 8
*/
//
/*The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. To verify, you've been asked to write a 
function that processes an array of customer objects and return a new array that contains only customers that match ANY of the following criteria:

name starts with a 'C' (upper or lowercase)
address contains no undefined fields
the city is Peoria and the state is AZ
membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
The array of customer objects will have the following schema:

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    //more customers with the same schema
];

Note: The solution to this problem does not require the use of callbacks. You will also need to use dot notation to access the properties. 
For example, customers[0].name would return "Sam".
*/

const customers = [
  {
    name: "Sam",
    address: {
      street: "1234 W Bell Rd",
      city: "Phoenix",
      zip: "85308",
      state: "AZ",
    },
    membershipLevel: "GOLD",
    age: 32,
  },
  {
    name: "Frank",
    address: [],
    membershipLevel: "SILVER",
    age: 45,
  },
  {
    name: "Will",
    address: {
      street: "1234 W Bell Rd",
      city: "Peoria",
      zip: "85308",
      state: "AZ",
    },
    membershipLevel: "SILVER",
    age: 32,
  },
  {
    name: "Tim",
    address: [],
    membershipLevel: "SILVER",
    age: 22,
  },{
    name: "Chuck",
    address: [],
    membershipLevel: "SILVER",
    age: 30,
  },
  //more customers with the same schema
];
let total = "";

function customerSearch(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.startsWith("C") || data[i].name.startsWith("c")) {
      console.log(data[i]);
    } else if(data.address !== undefined){
      console.log (data[i])
    } else if (data[i].address.city == "Peoria" && data[i].address.state == "AZ" ){
      console.log(data[i])
    } else if (data[i].membershipLevel == "GOLD"){
      console.log(data[i]);
    } else if (data[i].membershipLevel == "PLATINUM" ){
    console.log(data[i])
    } else if ((data[i].age < 29) && (data[i].membershipLevel == "SILVER")){
       console.log(data[i]);
    }
  }
}

customerSearch(customers);



/*

*/
