/**********************************************************************
* @Execution : default node : cmd> gambler.js
* 
* 
* @Purpose : to play gambler game for fun 
* 
*
* @description : Simulates a gambler who start with $stake and place fair $1 bets until
* he goes broke (i.e. has no money) or reach goal.Keeps track of the number of times  
* he wins and the number of bets he makes
* 
* @overview :Run the experiment N times, averages the results, and prints them out.
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 05-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let gam = require('./gambleBL');
let s = read.question('enter the stake');
let g = read.question('enter the goal value');
let n = read.question('enter the no of time to play');
gam.gambler(s,g,n);

