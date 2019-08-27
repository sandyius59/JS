/**********************************************************************
* @Execution : default node : cmd> temperatur.js
* 
* 
* @Purpose : To Convert the temperature from celcius to fahreinheit and vice-versa
* 
* @description :the temperature in fahrenheit as input outputs the temperature 
* in Celsius or viceversa 
* 
* 
* @overview : to converstion temperatur
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 09-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let tem = require('./temperaturBL');
let choice = read.question("Enter 1 for write in celcious and 2 for faremheit");
let temperatur = read.question('Enter temperatur');
if (choice==1)
{
    tem.conversion(temperatur,1);
}
else if (choice==2)
{
    tem.conversion(temperatur,2);
}