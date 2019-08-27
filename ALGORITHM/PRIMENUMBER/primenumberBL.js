prime=(start,end)=>
{
	try{
    let k=0;
    let a=[1000];
    for (i=start;i<end;i++)
	{
		let count=0,j;
		for(j=2;j<i;j++)
		{
		    if(i%j==0)
			{
				count++;
				break;
			}
				
		}
		if(count == 0)
		{
			console.log(i);
			a[k++]=i;
		}
	}
}
catch(e)
{
	console.log(e);
}
}
module.exports={prime};