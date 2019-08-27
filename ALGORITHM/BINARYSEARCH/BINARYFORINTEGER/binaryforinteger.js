/**********************************************************************
* @Execution : default node : cmd> binaruforinteger.js
* 
* 
* @Purpose : Search position or index of particuler character using binary search 
* 
* @description :search particuler integer using binary search 
* 
* @overview :  to find any integer position
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 07-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let reff = require('./binaryforintegerBL');
let value =read.question('enter number');

let items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log('number is found at position'+reff.Search(items,value));
