console.log('so fetch!')

// GET Lesson:

// 1. Make a GET request on page load to get all of the users for a given resource, and log those items to the console.
// http://localhost:3001/api/v1/users
//fetch("http://localhost:3001/api/v1/users") // give me a promise...
//THEN >>>> when the promise resolves...get the response and json it..
//    .then(response => response.json()) // returns the json's resp. as a PROMISE
// when that promise resolves..THEN.. I have the data and I can console log it
//    .then(data => console.log('data', data))

// NOTE: the “response.json()” MUST be returned in the first .then() either IMPLICITLY 
// (one line arrow function) or EXPLICITLY (with return keyword) 



// 2. Make a GET request on page load  to get all of the sports 
// items for a given resource, and log those items to the console.
    // fetch("http://localhost:3001/api/v1/sport-teams")
    //     .then(response => response.json()) 
    //     .then(data => console.log('data', data))
// Let's hook it up to the DOM!

var logSportsTeams = document.querySelector(".js-log-sports-teams")
var sportTeamSection = document.querySelector("js-collectionST")

logSportsTeams.addEventListener("click", fetchSportsTeams)

function fetchSportsTeams() {
    fetch("http://localhost:3001/api/v1/sport-teams")
    .then(response => response.json())
    .then(data => {
        console.log('sports teams: ', data)
        data.forEach(sportTeam => {
                sportTeamSection.innerHTML += `<p>${sportTeam.name}</p>`
            })
        })
        .catch(error => console.log('the error', error));
}


// 3. When the user clicks the "Log animals!" button, make a GET request to get all of the animals, and log them to the console.

//pusedocode:
// I need to query the button
// add eventListener for when someone clicks the button
// build a funtion to put in the event Listeners so that when they click the button, the function fires...
// the function should just GET/FETCH the animal and console log them...

var logAnimalsButton = document.querySelector(".js-log-animals")
let animalsSection = document.querySelector(".js-collection")

logAnimalsButton.addEventListener("click", fetchAnimals)

function fetchAnimals() {
    //f etch
    fetch("http://localhost:3001/api/v1/animals")
        .then(response => response.json())
        .then(data => {
            console.log('animals: ', data)
            data.forEach(animal => {
                animalsSection.innerHTML += `<p>${animal.name}</p>`
            })
        })
        .catch(error => console.log('the error', error));
}

//PROMISE.ALL()

// 4. 🌶 On page load, GET all users and populate the section (.js-collection) with that information.
// We should see a <p> element for each user that contains text about that user. For example, "Travis Rollins is online and enjoys music, software, and gaming."






// STOP!
// Don't do the next section until the POST lesson!

// POST Lesson:
// 1. Make a POST request to create a new instance of that resource, and log the result to the console.
// 2. Rerun your previous GET fetch request to verify you added the new resource
// 3. Add an event listener, so that when you click button.js-add-item (comment this back in the HTML file!), it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection

// Spicy Challenge:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)
