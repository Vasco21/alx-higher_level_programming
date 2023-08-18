#!/usr/bin/node

// Import the necessary modules
const fs = require('fs');
const request = require('request');

// Make a GET request to the URL provided as the first argument and pipe the response to a writable stream
request(process.argv[2]).pipe(fs.createWriteStream(process.argv[3]));
