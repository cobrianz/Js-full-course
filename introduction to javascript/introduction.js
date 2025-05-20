// ==========================
// Introduction to JavaScript
// ==========================

// JavaScript can be added to HTML using <script src="intro.js"></script>

// Syntax and Logging
console.log("JavaScript is working.");
console.log("This script introduces core JavaScript fundamentals.");

// ==========================
// Variables and Data Types
// ==========================

// Use let and const to declare variables
let name = "Alice"; // String
const age = 25; // Number
let isStudent = true; // Boolean

// Output variable values
console.log("Name:", name);
console.log("Age:", age);
console.log("Is a student:", isStudent);

// Reassignment (allowed with let)
let score = 50;
score = 80;
console.log("Updated score:", score);

// Data types: string, number, boolean, null, undefined
let message = "Hello, world";
let count = 42;
let active = false;
let emptyValue = null;
let notAssigned;

console.log(typeof message); // string
console.log(typeof count); // number
console.log(typeof active); // boolean
console.log(typeof emptyValue); // object (null is a special case)
console.log(typeof notAssigned); // undefined

// ==========================
// Operators and Expressions
// ==========================

let x = 10;
let y = 4;

// Arithmetic operators
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus (remainder):", x % y);

// Assignment operators
x += 5; // x = x + 5
console.log("After += 5:", x);

// Logical operators
let a = true;
let b = false;

console.log("Logical AND (a && b):", a && b);
console.log("Logical OR (a || b):", a || b);
console.log("Logical NOT (!a):", !a);

// ==========================
// Conditional Statements
// ==========================

let temperature = 22;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature >= 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's cold outside.");
}

// switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("End of the work week.");
    break;
  default:
    console.log("Midweek day.");
}

// ==========================
// Loops
// ==========================

// for loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while loop
let countDown = 3;
console.log("Countdown using while loop:");
while (countDown > 0) {
  console.log(countDown);
  countDown--;
}

// do...while loop
let number = 0;
console.log("Using do...while loop:");
do {
  console.log("Number is:", number);
  number++;
} while (number < 3);

// ==========================
// Mini Project: Number Guessing Game
// ==========================

// Generate a random number between 1 and 10
const target = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

console.log("Guess the number between 1 and 10.");

while (guess !== target) {
  guess = parseInt(prompt("Enter your guess:")); // works in browser
  attempts++;

  if (guess > target) {
    console.log("Too high. Try again.");
  } else if (guess < target) {
    console.log("Too low. Try again.");
  } else if (guess === target) {
    console.log(`Correct! You guessed it in ${attempts} attempt(s).`);
  } else {
    console.log("Please enter a valid number.");
  }
}
