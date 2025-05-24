// JavaScript Learning File: Math, Date, and Operators
// This file provides a detailed guide to JavaScript's Math object, Date object, and operators.
// Each section includes explanations, examples, and exercises with comments.
// Run in a browser console (F12) or Node.js to see outputs.
// Practice by modifying examples and completing exercises.

// -----------------------------------
// Section 1: Math and Methods
// -----------------------------------
// The Math object provides built-in methods and constants for mathematical operations.
// It's a static object, so methods are called directly (e.g., Math.method()).

// Constants Example
// Math.PI is the ratio of a circle's circumference to its diameter (~3.14159).
console.log("Math.PI:", Math.PI); // Output: ~3.14159
console.log("Math.E:", Math.E); // Output: ~2.71828 (base of natural logarithm)

// Rounding Methods
// Math.round: Rounds to the nearest integer.
console.log("Math.round(4.6):", Math.round(4.6)); // Output: 5
console.log("Math.round(4.4):", Math.round(4.4)); // Output: 4

// Math.floor: Rounds down to the previous integer.
console.log("Math.floor(4.9):", Math.floor(4.9)); // Output: 4

// Math.ceil: Rounds up to the next integer.
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // Output: 5

// Math.trunc: Removes decimal part, returning integer.
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // Output: 4

// Arithmetic Methods
// Math.abs: Returns absolute (positive) value.
console.log("Math.abs(-7):", Math.abs(-7)); // Output: 7

// Math.max: Returns largest value from arguments.
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3)); // Output: 5

// Math.min: Returns smallest value from arguments.
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3)); // Output: 1

// Math.pow: Raises base to exponent (base^exponent).
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Output: 8 (2^3)

// Math.sqrt: Returns square root.
console.log("Math.sqrt(16):", Math.sqrt(16)); // Output: 4

// Random Numbers
// Math.random: Returns a random number between 0 (inclusive) and 1 (exclusive).
console.log("Math.random():", Math.random()); // Output: Random (e.g., 0.723...)

// Generate random integer between min (inclusive) and max (inclusive).
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random int (1-10):", getRandomInt(1, 10)); // Output: Random 1–10

// Trigonometric Methods (Optional for Advanced)
// Math.sin: Returns sine of angle in radians.
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Output: 1 (sin 90°)

// Math.cos: Returns cosine of angle in radians.
console.log("Math.cos(0):", Math.cos(0)); // Output: 1 (cos 0°)

// Other Methods
// Math.log: Natural logarithm (base e).
console.log("Math.log(Math.E):", Math.log(Math.E)); // Output: 1

// Math.sign: Returns -1 (negative), 0, or 1 (positive).
console.log("Math.sign(-5):", Math.sign(-5)); // Output: -1

// Exercise 1: Calculate Circle Area
// Task: Write a function to calculate the area of a circle given radius (area = π * r^2).
// Try it: Uncomment and complete the function below, then log the result for radius = 5.
// function circleArea(radius) {
//   // Your code here
// }
// console.log("Circle area (radius 5):", circleArea(5));

// Exercise 2: Dice Roll Simulator
// Task: Create a function to simulate rolling a 6-sided die using getRandomInt.
// Try it: Write the function and log 3 rolls.

// -----------------------------------
// Section 2: Date and Methods
// -----------------------------------
// The Date object represents a moment in time, stored as milliseconds since Jan 1, 1970 (Unix epoch).
// Create with new Date() or specific values.

// Creating Dates
// Current date and time.
const now = new Date();
console.log("Current date:", now); // Output: Current date/time (e.g., 2025-05-23T18:55:00.000Z)

// Specific date: new Date(year, month, day, hours, minutes, seconds, milliseconds).
// Note: Month is 0-based (0 = January, 11 = December).
const specificDate = new Date(2025, 4, 23, 12, 0); // May 23, 2025, 12:00 PM
console.log("Specific date:", specificDate);

// Date from string (ISO format recommended).
const dateFromString = new Date("2025-05-23T12:00:00Z");
console.log("Date from string:", dateFromString);

// Getter Methods
// Get components of current date.
console.log("Year:", now.getFullYear()); // Output: 2025
console.log("Month (0-11):", now.getMonth()); // Output: 4 (May)
console.log("Day of month:", now.getDate()); // Output: 23
console.log("Day of week (0-6):", now.getDay()); // Output: 5 (Friday)
console.log("Hours:", now.getHours()); // Output: Current hour (local time)
console.log("Minutes:", now.getMinutes()); // Output: Current minutes

// UTC getters (Coordinated Universal Time).
console.log("UTC Year:", now.getUTCFullYear()); // Output: 2025
console.log("UTC Hours:", now.getUTCHours()); // Output: UTC hour

// Milliseconds since epoch.
console.log("Milliseconds since 1970:", now.getTime()); // Output: Large number

// Setter Methods
// Set components of a date.
const modifiedDate = new Date();
modifiedDate.setFullYear(2026);
modifiedDate.setMonth(0); // January
modifiedDate.setDate(1);
console.log("Modified date:", modifiedDate); // Output: 2026-01-01...

// Formatting Dates
// Readable strings.
console.log("Date string:", now.toDateString()); // Output: e.g., Fri May 23 2025
console.log("Time string:", now.toTimeString()); // Output: e.g., 18:55:00 GMT+0300
console.log("ISO string:", now.toISOString()); // Output: e.g., 2025-05-23T18:55:00.000Z

// Locale-specific formatting.
console.log("Locale date:", now.toLocaleDateString("en-US")); // Output: e.g., 5/23/2025
console.log("Locale time:", now.toLocaleTimeString("en-US")); // Output: e.g., 6:55:00 PM

// Date Calculations
// Difference between two dates (in milliseconds).
const date1 = new Date("2025-05-23");
const date2 = new Date("2025-06-01");
const diffMs = date2 - date1;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Days between May 23 and June 1:", diffDays); // Output: 9

// Exercise 3: Digital Clock
// Task: Create a function to log the current time every second using setInterval.
// Try it: Write the function and test in the console (stop with clearInterval).

// Exercise 4: Days Until Event
// Task: Write a function to calculate days until a future date (e.g., New Year 2026).
// Try it: Log the result for Jan 1, 2026.

// -----------------------------------
// Section 3: Operators
// -----------------------------------
// Operators perform operations on variables/values, controlling logic and calculations.

// Arithmetic Operators
// Basic operations: +, -, *, /.
console.log("5 + 3:", 5 + 3); // Output: 8
console.log("5 - 3:", 5 - 3); // Output: 2
console.log("5 * 3:", 5 * 3); // Output: 15
console.log("6 / 2:", 6 / 2); // Output: 3

// Modulus: % (remainder).
console.log("7 % 3:", 7 % 3); // Output: 1

// Exponentiation: ** (power).
console.log("2 ** 3:", 2 ** 3); // Output: 8

// Increment: ++ (adds 1).
let x = 5;
console.log("x++:", x++); // Output: 5 (post-increment, logs 5, x becomes 6)
console.log("++x:", ++x); // Output: 7 (pre-increment, x becomes 7, logs 7)

// Unary: + (convert to number), - (negation).
console.log("+ '123':", +"123"); // Output: 123 (string to number)
console.log("-5:", -5); // Output: -5

// Assignment Operators
// Basic: = (assign).
let a = 10;
console.log("a:", a); // Output: 10

// Compound: +=, -=, *=, /=, %=.
a += 5; // Equivalent to a = a + 5
console.log("a += 5:", a); // Output: 15

// Logical Operators
// AND: && (true if both true).
console.log("true && false:", true && false); // Output: false

// OR: || (true if either true).
console.log("true || false:", true || false); // Output: true

// NOT: ! (inverts truthiness).
console.log("!true:", !true); // Output: false

// Nullish Coalescing: ?? (returns right operand if left is null/undefined).
let b = null;
console.log("b ?? 10:", b ?? 10); // Output: 10

// Comparison Operators
// Strict equality: === (value and type).
console.log("5 === '5':", 5 === "5"); // Output: false
console.log("5 === 5:", 5 === 5); // Output: true

// Loose equality: == (value, with type coercion).
console.log("5 == '5':", 5 == "5"); // Output: true

// Inequality: !== (strict), != (loose).
console.log("5 !== '5':", 5 !== "5"); // Output: true
console.log("5 != '5':", 5 != "5"); // Output: false

// Relational: >, <, >=, <=.
console.log("5 > 3:", 5 > 3); // Output: true
console.log("5 <= 5:", 5 <= 5); // Output: true

// Bitwise Operators (Optional for Advanced)
// Bitwise AND: & (1 if both bits are 1).
console.log("5 & 3:", 5 & 3); // Output: 1 (0101 & 0011 = 0001)

// Bitwise OR: | (1 if either bit is 1).
console.log("5 | 3:", 5 | 3); // Output: 7 (0101 | 0011 = 0111)

// Bitwise XOR: ^ (1 if bits differ).
console.log("5 ^ 3:", 5 ^ 3); // Output: 6 (0101 ^ 0011 = 0110)

// Bitwise NOT: ~ (inverts bits).
console.log("~5:", ~5); // Output: -6 (inverts 0101)

// Left shift: << (shifts bits left).
console.log("5 << 1:", 5 << 1); // Output: 10 (0101 << 1 = 1010)

// Ternary Operator
// Syntax: condition ? exprIfTrue : exprIfFalse.
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log("Ternary (age 20):", status); // Output: Adult

// Exercise 5: Budget Calculator
// Task: Write a function to calculate total cost with 10% tax using arithmetic operators.
// Try it: Log the result for a $50 item.

// Exercise 6: User Role Checker
// Task: Create a function to check if a user is an admin or guest using logical operators.
// Try it: Log access status for role = "admin" and role = "guest".

// -----------------------------------
// Section 4: Mini-Project
// -----------------------------------
// Combine Math, Date, and Operators in a simple project.
// Project: Event Countdown Generator
// Description: Generates a random event date in 2025 and calculates days until it.

// Function to generate random event date in 2025
function getRandomEventDate() {
  const start = new Date(2025, 0, 1); // Jan 1, 2025
  const end = new Date(2025, 11, 31); // Dec 31, 2025
  const diffMs = end - start;
  const randomMs = Math.floor(Math.random() * diffMs);
  return new Date(start.getTime() + randomMs);
}

// Calculate days until event
const eventDate = getRandomEventDate();
const today = new Date();
const daysUntilEvent = Math.floor((eventDate - today) / (1000 * 60 * 60 * 24));
console.log("Random event date:", eventDate.toDateString());
console.log("Days until event:", daysUntilEvent);

// Conditional message using ternary operator
const message = daysUntilEvent > 0 ? "Event is upcoming!" : "Event has passed!";
console.log("Event status:", message);

// Exercise 7: Enhance Mini-Project
// Task: Add a feature to display the event time and format it with toLocaleTimeString.
// Try it: Modify the project to log event time in your locale.

// -----------------------------------
// How to Use This File
// -----------------------------------
// 1. Save as learn-js-math-date-operators.js.
// 2. Run in a browser console (F12) or Node.js (node learn-js-math-date-operators.js).
// 3. Read comments to understand each section.
// 4. Test examples by logging outputs.
// 5. Complete exercises by uncommenting and writing solutions.
// 6. Modify values (e.g., dates, numbers) to experiment.
// 7. Check outputs in the console to verify results.


// Happy learning! Practice daily and build small projects to master these concepts.
