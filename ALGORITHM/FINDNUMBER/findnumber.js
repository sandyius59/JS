let read = require('readline-sync');
let reff = require('./findnumberBL');
var number = parseInt(process.argv[2]);
var start = 0;
var end = number;
mid = parseInt((start+end)/2);
reff.findnumber(number,start,mid,end);