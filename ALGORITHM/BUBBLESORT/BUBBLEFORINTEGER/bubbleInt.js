/**********************************************************************
* @Execution : default node : cmd> bubbleInt.js
* 
* 
* @Purpose : it's sorting alorithm for integer element 
* 
* @description :bubble sort are perform for swapping the adjacent elements
* 
* @overview :  sorting application
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 08-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let sort = require('./bubbleIntBL');
let arr = [1,4,2,5,7,6,0,80,70,20];
sort.bubble(arr);
console.log(arr);