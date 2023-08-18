#!/usr/bin/node

const fs = require('fs');

// Check if the file path argument is provided
if (process.argv.length < 3) {
  console.log("Usage: node script.js <file-path>");
  process.exit(1);
}

// Get the file path from the command line argument
const filePath = process.argv[2];

// Read and print the content of the file
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    console.error(err);
  } else {
    console.log(content);
  }
});
