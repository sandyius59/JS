let read = require('readline-sync');
let primeno = require('./primenumberBL');
console.log("enter the range");
let start=read.question("enter the first no");
let end = read.question("enter the second no");
primeno.prime(start,end);
		