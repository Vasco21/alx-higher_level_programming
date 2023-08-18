#!/usr/bin/node

const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node script.js <URL>");
    process.exit(1);
}

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request to the specified URL and listen for the 'response' event
request.get(url).on('response', (response) => {
    console.log(`code: ${response.statusCode}`);
});
