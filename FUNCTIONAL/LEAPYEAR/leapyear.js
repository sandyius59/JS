/**********************************************************************
* @Execution : default node : cmd> leapyear.js
* 
* 
* @Purpose : perform operations by using users input and check the leap year   
* 
* @description : By using leapyear.js , to find the leap year or not
* 
* @overview : it's checking leap year application 
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 05-Aug-2019
*
***********************************************************************/

let read = require('readline-sync');
let leap = require('./leapyearBL');
let year = read.question('enter the year');
let result = leap.leapyear(year);
if (result)
{
    console.log(year+" is leap year");
}
else
{
    console.log(year+" is not leap year");
}