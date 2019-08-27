/**
  * @desc Function for sorting elements
  *   
  * @param s in store all value of user and pass the value
  *
  * @return index / positions
*/
bubble=(s)=>
{
	try{
	let arr=s.split('');
	console.log(arr);
    for(let i=0;i<arr.length;i++)
    	{
    		for(let j=i+1;j<arr.length;j++)
    		{
    			if(arr[i] >arr[j]<0)
    			{
    				let temp=arr[i];
    				arr[i]=arr[j];
    				arr[j]=temp;
    			}

    		}
			return arr;
    	}
    	
		console.log(arr);
		
	}
	catch(e)
	{
		console.log(e)
	}
}
module.exports={bubble};