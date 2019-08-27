/**
  * @desc Finction to check each characters and match both input value 
  *   
  * @param sta1 it's first value of user 
  * @param sta2 it's secound value of user 
  * @return false or ture
*/
areanagram=(str1,str2)=>
{
    try{
    if (str1.length != str2.length) 
    {
        return false; 
    }
    else 
    {
        let a1=str1.toLowerCase();
        a1=a1.split('');
        let a2=str2.toLowerCase();
        a2 = a2.split('');
    // Sort both strings 
       a1=a1.sort(); 
       a2= a2.sort(); 

       console.log(a1)
       console.log(a2)

        for (let i = 0; i < a2.length; i++)
        {
            if (a1[i]== a2[i]) 
            return true; 
        
        else {
          return false;
        }
        }
    }
    return false;
}
catch(e) {
    console.log(e)
}  
}
module.exports= {areanagram};