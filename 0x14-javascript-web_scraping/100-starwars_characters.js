#!/usr/bin/node

const request = require('request');

// Construct the URL for the film based on the argument provided
const url = 'https://swapi.co/api/films/' + process.argv[2];

// Make a GET request to the film URL
request(url, function (error, response, body) {
  if (!error) {
    // Parse the JSON response into an object
    const characters = JSON.parse(body).characters;

    // Iterate through each character URL
    characters.forEach((character) => {
      // Make a GET request to the character URL
      request(character, function (error, response, body) {
        if (!error) {
          // Print the name of the character
          console.log(JSON.parse(body).name);
        }
      });
    });
  }
});

