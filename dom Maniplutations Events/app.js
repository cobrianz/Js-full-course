// JavaScript DOM Selection, Manipulation, and Events: Detailed Notes

// === DOM SELECTION ===
// The DOM represents an HTML document as a tree of nodes, allowing JavaScript to interact with it.
// Use methods like getElementById and querySelector to select elements.

// getElementById
// Selects a single element by its unique ID attribute.
// Syntax: document.getElementById("id")
const title = document.getElementById("main-title");
// Example: Assume HTML has <h1 id="main-title">Hello</h1>
// console.log(title); // Output: <h1 id="main-title">Hello</h1>

// querySelector
// Selects the first element matching a CSS selector.
// Syntax: document.querySelector("selector")
// More flexible than getElementById, can use any CSS selector (e.g., class, tag, attribute).
const firstPara = document.querySelector("p");
// Example: Assume HTML has <p>First paragraph</p>
// console.log(firstPara); // Output: <p>First paragraph</p>

const classElement = document.querySelector(".highlight");
// Example: Assume HTML has <div class="highlight">Highlighted</div>
// console.log(classElement); // Output: <div class="highlight">Highlighted</div>

// querySelectorAll
// Returns a NodeList of all elements matching a CSS selector.
// Syntax: document.querySelectorAll("selector")
const allParas = document.querySelectorAll("p");
// Example: Assume HTML has multiple <p> elements
// console.log(allParas); // Output: NodeList [<p>, <p>, ...]
// Iterate with forEach:
// allParas.forEach(p => console.log(p.textContent));

// === DOM MANIPULATION ===
// Once elements are selected, you can modify their content, attributes, or styles.

// Changing Text Content
// Use textContent to set or get the text content of an element (ignores HTML tags).
title.textContent = "New Title";
// Example: Changes <h1 id="main-title">Hello</h1> to <h1 id="main-title">New Title</h1>

// Use innerText (similar but respects CSS display properties).
title.innerText = "Updated Title";
// console.log(title.innerText); // Output: Updated Title

// Changing HTML Content
// Use innerHTML to set or get the HTML content inside an element.
firstPara.innerHTML = "<strong>Bold text</strong> and more";
// Example: Changes <p>First paragraph</p> to <p><strong>Bold text</strong> and more</p>
// console.log(firstPara.innerHTML); // Output: <strong>Bold text</strong> and more

// Changing Styles
// Use the style property to modify CSS styles directly.
// Syntax: element.style.property = "value"
title.style.color = "blue";
title.style.fontSize = "24px";
// Example: Changes <h1 id="main-title"> to have blue text and 24px font size
// console.log(title.style.color); // Output: blue

// Modifying Classes
// Use classList to add, remove, or toggle CSS classes.
classElement.classList.add("active");
// Example: Adds "active" class to <div class="highlight">, becomes <div class="highlight active">
classElement.classList.remove("highlight");
// Example: Removes "highlight" class, becomes <div class="active">
classElement.classList.toggle("visible");
// Example: Toggles "visible" class on/off based on its presence.

// Modifying Attributes
// Use setAttribute, getAttribute, or direct property access.
title.setAttribute("id", "new-title");
// Example: Changes id="main-title" to id="new-title"
// console.log(title.getAttribute("id")); // Output: new-title
firstPara.id = "para1"; // Direct property access
// console.log(firstPara.id); // Output: para1

// === EVENTS & LISTENERS ===
// Events are user or system actions (e.g., clicks, key presses) that JavaScript can respond to.
// Use addEventListener to attach event handlers to elements.

// addEventListener
// Syntax: element.addEventListener("event", function, options)
// Attaches a function to run when the specified event occurs.

// Click Event
// Triggers when an element is clicked.
const button = document.querySelector("#my-button");
// Assume HTML: <button id="my-button">Click Me</button>
button.addEventListener("click", () => {
  title.textContent = "Button Clicked!";
  title.style.color = "red";
});
// Example: Clicking the button changes the title's text and color.

// Keydown Event
// Triggers when a key is pressed.
const input = document.querySelector("#my-input");
// Assume HTML: <input id="my-input" type="text">
input.addEventListener("keydown", (event) => {
  // console.log(event.key); // Outputs the key pressed (e.g., "Enter", "a")
  if (event.key === "Enter") {
    firstPara.textContent = input.value; // Sets paragraph text to input value
    input.value = ""; // Clears input field
  }
});
// Example: Pressing Enter in the input updates the paragraph with the input's value.

// Event Object
// The event parameter provides details about the event (e.g., target, key, mouse coordinates).
button.addEventListener("click", (event) => {
  // console.log(event.target); // Output: <button id="my-button">Click Me</button>
  event.target.style.backgroundColor = "green"; // Changes button background on click
});

// Removing Event Listeners
// Use removeEventListener, but the function must be named (not anonymous).
const clickHandler = () => {
  // console.log("Button clicked!");
};
button.addEventListener("click", clickHandler);
button.removeEventListener("click", clickHandler);
// Example: Removes the clickHandler function from the button's click event.

// Practical Example Combining DOM Selection, Manipulation, and Events
// Assume HTML:
// <div id="container">
//   <h1 id="main-title">Welcome</h1>
//   <input id="my-input" type="text" placeholder="Enter text">
//   <button id="my-button">Update</button>
//   <p class="highlight">Initial text</p>
// </div>

// Select elements
const container = document.querySelector("#container");
const updateButton = document.querySelector("#my-button");
const textInput = document.querySelector("#my-input");
const paragraph = document.querySelector(".highlight");

// Add click event to button
updateButton.addEventListener("click", () => {
  paragraph.textContent = textInput.value || "No input provided";
  paragraph.style.color = "purple";
  paragraph.classList.add("active");
  textInput.value = ""; // Clear input
});

// Add keydown event to input (Enter key)
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    paragraph.innerHTML = `<em>${textInput.value}</em>`;
    paragraph.style.fontSize = "18px";
    textInput.value = "";
  }
});

// Add mouseover event to container for interactivity
container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "#f0f0f0";
});
container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "";
});
// Example: Hovering over the container changes its background; leaving resets it.
