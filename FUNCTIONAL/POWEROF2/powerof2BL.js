 /**
  * @desc it's function calculation power of two 
  * formula p = p*2  
  * @param num -> it's user input for find the value , it's integer value 
  * @return integer value of power
*/
let powerof2cal = (num) =>
{
    try{
    let p = 1;
    for(let i=0;i<num;i++)
    {
        p = p*2;
    }
    return p;
}
catch(e)
{
    console.log(e);
}
}
module.exports={powerof2cal}