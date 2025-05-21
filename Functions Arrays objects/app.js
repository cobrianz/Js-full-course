// JavaScript Functions, Arrays, and Objects:
// === FUNCTIONS ===
// A function is a reusable block of code designed to perform a specific task.
// Functions can take inputs (parameters), process them, and return an output.

// Function Declaration
// Syntax: function functionName(parameters) { code block }
// - Declared functions are hoisted, meaning they can be called before their definition.
function greet(name) {
  return `Hello, ${name}!`;
}
// Example usage:
// console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
// Syntax: const functionName = function(parameters) { code block }
// - Not hoisted, must be defined before calling.
const add = function (a, b) {
  return a + b;
};
// Example usage:
// console.log(add(2, 3)); // Output: 5

// Arrow Function (ES6)
// Syntax: const functionName = (parameters) => { code block }
// - Concise syntax, does not have its own 'this' binding, often used for short functions.
const multiply = (x, y) => x * y;
// Example usage:
// console.log(multiply(4, 5)); // Output: 20

// Default Parameters
// Allow parameters to have default values if none are provided.
function welcome(user = "Guest") {
  return `Welcome, ${user}!`;
}
// Example usage:
// console.log(welcome()); // Output: Welcome, Guest!
// console.log(welcome("Bob")); // Output: Welcome, Bob!

// Rest Parameters
// Collects all remaining arguments into an array using ... syntax.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
// Example usage:
// console.log(sum(1, 2, 3, 4)); // Output: 10

// Anonymous Functions
// Functions without a name, often used as callbacks.
setTimeout(function () {
//console.log("This runs after 3 second");
}, 3000);

// Immediately Invoked Function Expression (IIFE)
// A function that runs immediately after definition.
(function () {
  // console.log("IIFE runs immediately!");
})();

// === ARRAYS ===
// Arrays are ordered, zero-indexed lists used to store multiple values in a single variable.
// Declared using square brackets [] or Array constructor.

// Array Declaration
const fruits = ["apple", "banana", "orange"];
// Alternative: const fruits = new Array("apple", "banana", "orange");
// console.log(fruits); // Output: ["apple", "banana", "orange"]

// Accessing Elements
// Use index numbers, starting from 0.
const firstFruit = fruits[0];
// console.log(firstFruit); // Output: apple

// Array Length
// The length property returns the number of elements.
const length = fruits.length;
// console.log(length); // Output: 3

// Common Array Methods
// push(): Adds one or more elements to the end.
fruits.push("grape");
// console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// pop(): Removes and returns the last element.
const lastFruit = fruits.pop();
// console.log(lastFruit); // Output: grape
// console.log(fruits); // Output: ["apple", "banana", "orange"]

// shift(): Removes and returns the first element.
const firstRemoved = fruits.shift();
// console.log(firstRemoved); // Output: apple
// console.log(fruits); // Output: ["banana", "orange"]

// unshift(): Adds one or more elements to the beginning.
fruits.unshift("kiwi");
// console.log(fruits); // Output: ["kiwi", "banana", "orange"]

// map(): Creates a new array by applying a function to each element.
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
// console.log(upperFruits); // Output: ["KIWI", "BANANA", "ORANGE"]

// filter(): Creates a new array with elements that pass a test.
const longFruits = fruits.filter((fruit) => fruit.length > 5);
// console.log(longFruits); // Output: ["banana"]

// reduce(): Reduces the array to a single value by applying a function.
const numbers = [1, 2, 3, 4];
const sumNumbers = numbers.reduce((total, num) => total + num, 0);
// console.log(sumNumbers); // Output: 10

// forEach(): Executes a function for each element.
fruits.forEach((fruit) => {
  // console.log(`I like ${fruit}`);
});
// Output:
// I like kiwi
// I like banana
// I like orange

// === OBJECTS ===
// Objects are collections of key-value pairs, used to store structured data.
// Declared using curly braces {} or Object constructor.

// Object Declaration
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
};
// Alternative: const person = new Object(); person.name = "Alice"; ...

// Accessing Properties
// Dot notation
const personName = person.name;
// console.log(personName); // Output: Alice

// Bracket notation (useful for dynamic keys)
const key = "age";
const personAge = person[key];
// console.log(personAge); // Output: 25

// Adding/Modifying Properties
person.job = "Developer";
// console.log(person); // Output: {name: "Alice", age: 25, city: "New York", job: "Developer"}
person.age = 26;
// console.log(person.age); // Output: 26

// Deleting Properties
delete person.city;
// console.log(person); // Output: {name: "Alice", age: 26, job: "Developer"}

// Methods in Objects
// Functions stored as object properties.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  // Shorthand method syntax (ES6)
  subtract(a, b) {
    return a - b;
  },
};
// console.log(calculator.add(5, 3)); // Output: 8
// console.log(calculator.subtract(5, 3)); // Output: 2

// Object Destructuring
// Extract properties into variables.
const { name, age } = person;
// console.log(name, age); // Output: Alice 26

// Array of Objects
const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
];
// Accessing: console.log(students[0].name); // Output: Alice

// Looping Through Objects
// Using for...in to iterate over object properties.
for (let key in person) {
  // console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 26
// job: Developer

// Using Object.keys(), Object.values(), Object.entries()
const keys = Object.keys(person);
//console.log(keys); // Output: ["name", "age", "job"]
const values = Object.values(person);
// console.log(values); // Output: ["Alice", 26, "Developer"]
const entries = Object.entries(person);
// console.log(entries); // Output: [["name", "Alice"], ["age", 26], ["job", "Developer"]]

// Practical Example Combining Functions, Arrays, and Objects
// Create a function to filter and transform an array of objects.
const employees = [
  { name: "Alice", salary: 50000, department: "IT" },
  { name: "Bob", salary: 60000, department: "HR" },
  { name: "Charlie", salary: 75000, department: "IT" },
];

function getHighEarners(dept, minSalary) {
  return employees
    .filter((emp) => emp.department === dept && emp.salary > minSalary)
    .map((emp) => ({
      name: emp.name,
      bonus: emp.salary * 1.1,
    }));
}
// console.log(getHighEarners("IT", 55000));
// Output: [{name: "Charlie", bonus: 82500}]
