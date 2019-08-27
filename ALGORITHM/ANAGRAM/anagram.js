/**********************************************************************
* @Execution : default node : cmd> anagram.js
* 
* 
* @Purpose : to check the user input values are anagram or not 
* 
* @description :One string is an anagram of another if the second is simply a
* rearrangement of the first. For example, 'heart' and 'earth' are anagrams...
* 
* @overview :  
* @author : Sandeep kumar maurya  <sandeepkumarraj58@gmail.com>
* @version : 1.0
* @since : 07-Aug-2019
*
***********************************************************************/
let read = require('readline-sync');
let anagram = require('./anagramBL');

let str1="peek";
let str2="keep";
let ans = anagram.areanagram(str1,str2);
if(ans==true){
    console.log("two string are  anagram");
}
else
{
    console.log("two string are not anagram");
}