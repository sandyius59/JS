/**********************************************************************
* @Execution : default node : cmd> inserstionInt.js
* 
* 
* @Purpose : to sorting element for large file and suitable for sorting  
* 
* @description :it's program for sorting interger 
* 
* @overview : sorting for large file
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 08-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let search = require('./inserstionInt');

let arr = [3,6,4,2,7,1,5];
search.inserstion(arr);
console.log("Sorted int array");