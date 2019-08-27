/**
  * @desc Function for check for which position / index have your particuler integer
  *   
  * @param items in store all value of user  
  * @param value it is key value as you want to search particuler integer 
  * @return index / positions
*/
Search=(items, value)=>
{
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    try{
    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
catch(e)
{
  console.log(e);
}
}
module.exports={Search};