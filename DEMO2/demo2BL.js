let read= require('readline-sync');
addBinary=(a)=>
{
    var num = read.question('enter number')=a;
     //var num = a;
      binary = '';
       while ( num > 0 )
        {
            binary = ( num % 2 ) + binary; 
            num = Math.floor( num / 2 ); 
        }
        return binary; 
}
console.log( addBinary (1)  );
console.log( addBinary( 51 ) );
console.log( addBinary( 100 ) );