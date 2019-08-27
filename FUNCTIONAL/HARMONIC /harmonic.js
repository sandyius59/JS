/**********************************************************************
* @Execution : default node : cmd> harmonic.js
* 
* 
* @Purpose : perform operations and find the harmonic number  
* 
* @description :the perfrom of harmonic to Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
* 
* @overview :  application 
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 05-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let char = require('./harmonicBL');
let num = read.question('enter the number'); 
console.log(char.harmonic(num));