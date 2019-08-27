/**********************************************************************
* @Execution : default node : cmd> flipcoin.js
* 
* 
* @Purpose : Flip Coin and print percentage of Heads and Tails  
* 
* @description : Use Random Function to get value between 0 and 1. If < 0.5 then tails or
* heads
* 
* @overview : win or loss percentage application 
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 06-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let String = require('./flipcoinBL');
let number = read.question('Enter the no of time as you want flip');
let x = String.flip(number);
console.log(x[0],x[1]);