// This console log and other logs are visible in the browser console (dev tools) when 
// you use "open client/index.html" from the terminal
console.log('so fetch!')

// GET Lesson:

// There is an "Add Item!" button on the DOM that you'll see on the HTML page, but you will
// not use this until the POST Lesson section

// 1. Make a GET request on page load to get all of the users for a given resource, and log those items to the console.
// 2. Make a GET request on page load  to get all of the sports items for a given resource, and log those items to the console.

// Let's hook it up to the DOM!
// 3. When the user clicks the "Log animals!" button, make a GET request to get all of the animals, and log them to the console.
// 4. 🌶 On page load, GET all users and populate the section (.js-collection) with that information. We should see a <p> element for each user that contains text about that user. For example, "Travis Rollins is online and enjoys music, software, and gaming."






// STOP!
// Don't do the next section until the POST lesson!

// POST Lesson:
// 1. Make a POST request to create a new instance of that resource, and log the result to the console.
// 2. Rerun your previous GET fetch request to verify you added the new resource
// 3. Add an event listener, so that when you click button.js-add-item (comment this back in the HTML file!), it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection

// Spicy Challenge:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)
