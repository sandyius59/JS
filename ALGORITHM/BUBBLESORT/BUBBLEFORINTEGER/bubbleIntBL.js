/**
  * @desc Function for sorting elements
  *   
  * @param arr in store all value of user and pass the value
  *
  * @return index / positions
*/
bubble=(arr)=>
{
	try{
    for(let i=0;i<arr.length;i++)
    	{
    		for(let j=i+1;j<arr.length;j++)
    			{
    				if(arr[i]>arr[j])
    				{
    					let temp=arr[i];
    					arr[i]=arr[j];
    					arr[j]=temp;
    				}
					return arr;    			
				}

    	}
	}
	catch(e)
	{
		console.log(e)
	}   	
}
module.exports={bubble}