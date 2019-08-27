/**
  * @desc Function to find the square root of given no
  *   
  * @param c the value to find square root of
  *
  * @return return the square root
*/
root=(c)=>
{
  try{
    let t = c;
		let epsilon = 1e-15;
		
        while (Math.abs(t - c / t) > epsilon * t) 
        {
			t = (c / t + t) / 2;
		}

		return  parseInt(t);
}
catch(e)
{
  console.log(e);
}
}
module.exports={root};