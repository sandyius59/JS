 /**
  * @desc Function to find the percent of flipped coins
  *   
  * @param n the value for no of times flip 
  * @return integer value of power
*/
flip=(n)=>
{
    try{
    let head = 0;
    let tail = 0;
    for(let i =0;i<n;i++)
    {
        if(Math.random()<0.5)
        {
            tail++;
        }
        else
        {
            head++;
        }
    }
    return[parseInt(tail/n*100),parseInt(head/n*100)];
}
catch(e)
{
    console.log(e);
}
}
module.exports = {flip}
