#!/usr/bin/node

const fs = require('fs');

// Check if the required arguments are provided
if (process.argv.length < 4) {
	console.log("Usage: node script.js <file-path> <content>");
	process.exit(1);
}

// Get the file path and content from the command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Write the content to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log("Content has been written to the file.");
	}
});
