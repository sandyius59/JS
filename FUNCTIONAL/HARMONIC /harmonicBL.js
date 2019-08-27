/**
  * @desc Function to calculate the nth harmonic number 
  * @param n the value of harmonic no
  * @return addition of harmonic value
*/

harmonic = (num)=>
{
  try{
let sum = 1;

    for(let i=2;i<=num;i++)
    {
        sum =sum+1/i;
    }
    return sum;
}
catch(e)
{
  console.log(e);
}
}
module.exports={harmonic};