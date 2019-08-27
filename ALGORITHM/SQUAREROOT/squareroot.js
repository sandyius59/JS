/**********************************************************************
* @Execution : default node : cmd> squareroot.js
* 
* 
* @Purpose :  Program to find the square root of a given number 
* t o compute the square root of a nonnegative number c
* given in the input using Newton's method: 
* 
* 
* @overview : find square root , given number
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 09-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
const reff = require('./squarerootBL');

let c = read.question("enter no to find square root");
var result = reff.root(c);
console.log("square root is " +result);
