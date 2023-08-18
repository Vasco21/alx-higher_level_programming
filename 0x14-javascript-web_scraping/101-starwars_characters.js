#!/usr/bin/node

const request = require('request');

// Construct the URL for the film based on the argument provided
const url = 'https://swapi.co/api/films/' + process.argv[2];

// Make a GET request to the film URL
request(url, function (error, response, body) {
  if (!error) {
    let characters = JSON.parse(body).characters;

    // Call the printCharacters function to print character names
    printCharacters(characters, 0);
  }
});

// Recursive function to print character names
function printCharacters(characters, index) {
  // Base case: when all characters have been printed
  if (index >= characters.length) {
    return;
  }

  // Make a GET request to the character URL
  request(characters[index], function (error, response, body) {
    if (!error) {
      // Print the name of the character
      console.log(JSON.parse(body).name);

      // Recursively call printCharacters for the next character
      printCharacters(characters, index + 1);
    }
  });
}
