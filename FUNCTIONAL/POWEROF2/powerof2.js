/**********************************************************************
* @Execution : default node : cmd> powerof2.js
* 
* 
* @Purpose : perform operations by using users input and find the power of two  
* 
* @description : By using powerof2.js , to find the power of two values
* 
* @overview : power of 2 application 
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 05-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let powerof2object = require('./powerof2BL');
let num = read.question('Enter the number for finding the power of two');
console.log('the power of 2 is '+powerof2object.powerof2cal(num));
