#!/usr/bin/node

// Write a script that reads and prints the content of a file 

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
    console.error("Error reading the file:", err);
  } else {
    console.log("File content:\n", content);
  }
});
