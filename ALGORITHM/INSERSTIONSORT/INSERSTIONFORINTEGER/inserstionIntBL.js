/**
  * @desc Function for sorting elements
  *   
  * @param arr for store user value
  *
  * @return arr (sorting values)
*/
inserstion=(arr)=>
{
  try{
    let n = arr.length;
    for (let i = 1; i < n; i++) 
    {
    	let key = arr[i];
    	let j = i - 1;
    	while (j >= 0 && arr[j] > key) 
    	{
    		arr[j + 1] = arr[j];
    		j = j - 1;
    	}
    	arr[j + 1] = key;
    }
	return arr;
  }
  catch(e)
  {
    console.log(e);
  }
}
module.exports={inserstion};