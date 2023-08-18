#!/usr/bin/node

const request = require('request');

// Make a GET request to the specified URL
request(process.argv[2], function (error, response, body) {
  if (!error) {
    // Parse the JSON response into an array of todos
    const todos = JSON.parse(body);

    // Create an object to store the completed todo counts for each user
    let completed = {};

    // Iterate through each todo
    todos.forEach((todo) => {
      if (todo.completed && completed[todo.userId] === undefined) {
        completed[todo.userId] = 1;
      } else if (todo.completed) {
        completed[todo.userId] += 1;
      }
    });

    // Print the completed todo counts
    console.log(completed);
  }
});
