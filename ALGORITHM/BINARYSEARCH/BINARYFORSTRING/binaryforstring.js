/**********************************************************************
* @Execution : default node : cmd> binaruforstring.js
* 
* 
* @Purpose : Search position or index of particuler string value using binary search 
* 
* @description :search particuler string value using binary search 
* 
* @overview :  to find any String position
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 07-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let ints = require('./binaryforstringBL');

let s = "i love my self"
let key = read.question('enter the value as you want to search ')

let ans=ints.binaryString(s,key);
console.log(ans);