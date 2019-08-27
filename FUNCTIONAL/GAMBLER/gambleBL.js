 /**
  * @desc  Function to simulate gamble  
  * @param n the value of no of times to bet
  * 	  	S the amount which you have
  * 		g the value which to reach to win the gamble (not the bet)
  * @return 
*/
gambler = (s,g,n)=>
{
	try{
    let bets=0;
	let wins=0;
		for(let i=0;i<n;i++)
		{
            let cash=s;
			while(cash >0 && cash <g)
			{
				bets++;
				if(Math.random()<0.5)
					cash++;
				else
					cash--;	
			}
			if(cash==g)
			wins++;
        }
        console.log(wins + " wins of " + n);
		console.log("percent of games won = " +100.0*wins/n);
		console.log("avg bets = "+1.0*bets/n);
}
catch(e)
{
	console.log(e);
}
}
module.exports={gambler}
		

