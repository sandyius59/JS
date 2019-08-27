/**********************************************************************
* @Execution : default node : cmd> fector.js
* 
* 
* @Purpose : Program to find the prime factors of given no 
* 
* @description :Computes the prime factorization of N using brute force.
* 
* @overview : fector application 
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 06-Aug-2019
*
***********************************************************************/
let read = require('readline-sync')
let fect = require('./fectorBL');
let n = read.question("enter the number");
fect.factor(n);
