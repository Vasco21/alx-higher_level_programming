#!/usr/bin/node
/* prints a factorial */
function factorial (a) {
  if (a > 0) {
    return (a * factorial(a - 1));
  } else {
    return 1;
  }
}
const result = parseInt(process.argv[2]);
console.log(factorial(result));
