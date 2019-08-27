 /**
  * @desc it's function checking leap yaer 
  * year mod 400 or 100 and 4
  * @param year -> it's parameter , it's pass only 4 digit integer value 
  * @return only check leap year
*/
leapyear = (year)=>
{
	try{
    let flag = false;
		if(year%400==0)
		{
			flag=true;
		}
		else if (year%100==0)
		{
			flag = false;
		}
		else if (year%4==0)
		{
			flag=true;
		}
		else
		{
			flag = false;
		}
	
}
catch(e)
{
	console.log(e);
}

}
module.exports={leapyear};