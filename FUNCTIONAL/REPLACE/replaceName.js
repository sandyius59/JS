/**********************************************************************
* @Execution : default node : cmd> replaceName.js
* 
* 
* @Purpose : perform operations by using users name replacement 
* 
* @description : By using replace.js we can replace any string or integer value
* 
* @overview : content replacement application 
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 05-Aug-2019
*
***********************************************************************/

let input = require('readline-sync')
let reff = require('./replaceNameBL');
let name = input.question("Enter your name ");
console.log(reff.replaceName(name));