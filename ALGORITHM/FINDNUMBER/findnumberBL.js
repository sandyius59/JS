let read = require('readline-sync');

findnumber=(number,start,mid,end)=>
{
    try{
    while(start<=end)
    {
        if(start==end)
        {
            console.log('the number is '+start);
            break
        }
        console.log(start+'-----'+mid+'true'+' '+(mid+1)+'----'+end+'false');
        var enter = read.question('enter true or false');
        if (enter == false)
        {
            start= mid+1;
        }
        else 
        {
            end = mid;
        }
        mid = parseInt((start+end)/2);
    }
}
catch(e)
{
    console.log(e);
}
}
module.exports={findnumber};