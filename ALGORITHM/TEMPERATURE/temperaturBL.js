/**
  * @desc Function to convert fahrenheit to celcius and vice-versa
  *   
  * @param t integer value of principal amount
  * @param choice integer value of year
  *
  * @return 
*/
conversion=(t,choice)=>
{
    try{
    if(choice==1)
    {
        console.log(parseInt(t*(9/5)+32)+"in fr")
    }
    else if (choice==2)
    {
        console.log(parseInt((t+32)*(9/5))+'in celcious');

    }
}
catch(e)
{
    console.log(e);
}
}
module.exports={conversion};