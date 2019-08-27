/**********************************************************************
* @Execution : default node : cmd> payment.js
* 
* 
* @Purpose : to check the monthly payments for given amount ,duration and rate. 
* 
* @description :to calculate ​ monthlyPayment that reads in three
* command-line arguments P, Y, and R and calculates the monthly payments you
* would have to make over Y years to pay off a P principal loan amount at R per cent
* interest compounded monthly 
* 
* 
* @overview : to calculate manthly payment
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 09-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let reff = require('./paymentBL');
let p = read.question("enter principal");
let y = read.question('enter year');
let r = read.question('enter rate');
reff.payment(p,y,r);
console.log('result :'+pay)