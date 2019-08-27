/**
  * @desc Function for check for which position / index have your particuler string
  *   
  * @param s in store all value of user  
  * @param key it is key value as you want to search particuler Strings value
  * @return index / positions
*/
binaryString=(s,key)=>
{
	try{
	var start =0;
	arr = s.split('');
	var end = arr.length;
	var mid = parseInt((start+end)/2);
	arr = arr.sort();
	while(start<end)
	{
		
		if(arr[mid]==key)
		{
			console.log('Element is fount at positions'+mid);
			break;

		}
		else if (arr[mid]>key)
		{
			end= mid-1;
		}
		else
		{
			start= mid+1;

		}
		mid = parseInt((start+end)/2);

	}
	if (start>end)
	{
		console.log('element is not found');
	}

}
catch(e){console.log(e)}
}
module.exports={binaryString};