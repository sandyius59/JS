 /**
  * @desc write a user name and it's replace your content 
  * @param string value / type
  * @return return the fuction value (name)
*/
let replaceName = (name) =>
{
    try{
    if (name.length>3)
    {
        return('hello '+name+' how are you ?');
    }
}
catch(e)
{
    console.log(e);
}
}
module.exports = {replaceName};