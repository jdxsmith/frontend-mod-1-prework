/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/functions.js`
*/

//example: Write a function below that, when called will print your name
// function printName() {
  // console.log("Severus Snape");
// };

// printName();

// Update the function below so that it takes an argument of your name and
// prints your name

function printName(name) { 
    console.log(name);
};

printName('Albus Dumbledore');

// Write a function that takes in 2 numbers as arguments and prints their sum, and
// then call that function.
function printSum(num1, num2) {
    console.log(num1 + num2);
}

printSum(3, 5);

// Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function stringConcatenation(food1, food2) {
    console.log(food1 + " and " + food2 + " are a great combo");
}

stringConcatenation('Chicken Tenders', 'French Fries');