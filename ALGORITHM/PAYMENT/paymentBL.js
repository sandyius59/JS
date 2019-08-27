/**
  * @desc to calculate monthly payment for r interest and p principal for y years
  *   
  * @param p integer value of principal amount
  * @param y integer value of year
  * @param r integer value of rate
  *
  * @return pay monthly payment 
*/
payment=(p,y,r)=>
{
  try{
    let n = 12 *y;
    let r0 = r / (12 * 100);
    pay = p * r0 / (1 -Math.pow((1 + r0),-n));
    return pay;
  }
  catch(e)
  {
    console.log(e);
  }
  }
module.exports={payment};