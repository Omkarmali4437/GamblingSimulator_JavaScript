const WON = 1;
const LOST = 0;
var stake = 100;
var bet = 1;
var total_won = 0;
var total_lost = 0;

console.log("Welcome to Gambling Simulator");

console.log("Starting Stake for every day is: ",stake);
console.log("Bet is: ",bet);

for(let days = 1 ; days <= 20 ; days++){
    while( stake > 50 && stake < 150){
        var random = Math.floor(Math.random() * 2);

        if(random == WON){
            stake += bet;
            total_won += stake;
        }else{ 
            stake -= bet;
            total_lost += stake;
        }
    }
}
console.log(stake);
console.log("Total Amount Won: ",total_won);
console.log("Total Amount Lost: ",total_lost);