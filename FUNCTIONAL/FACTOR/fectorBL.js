/**
  * @desc Finction to check if the no is prime or not
  *   
  * @param n the number to check for prime 
  * @return true if prime and vice-versa
*/
let factor=(n)=>
{
    try{
    for(let i=2;i<=n;i++)
    {
        while(n%i==0)
        {
            console.log(i);
            n=n/i;
        }
    }

}
catch(e)
{
    console.log(e);
}
}
module.exports={factor};