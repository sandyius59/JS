/**********************************************************************
* @Execution : default node : cmd> dayofweek.js
* 
* 
* @Purpose : to read a date from user and give the on that day as out put 
* 
* @description :it's program for find day of week from user date
* 
* @overview :  find day of week from user date
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 08-Aug-2019
*
***********************************************************************/
//let read = require('readline-sync');
let days= require('./dayofweekBL');
let d = parseInt(process.argv[2]);
let m = parseInt(process.argv[3]);
let y = parseInt(process.argv[4]);
var result = days.dayofweek(d,m,y);
var s= ['sun','mon','tue','wen','thu','fri','sar'];
console.log("day is   "+s[result]);
