#!/usr/bin/node

const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.log("Usage: node script.js <API_URL>");
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a request to the API
request(apiUrl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const results = JSON.parse(body).results;

    // Count the movies where the character with ID ending in "/18/" appears
    const count = results.reduce((count, movie) => {
      return movie.characters.find((character) => character.endsWith('/18/'))
        ? count + 1
        : count;
    }, 0);

    console.log(count);
  } else {
    console.error("Error:", error);
  }
});
