const WON = 1;
const LOST = 0;
var stake = 100;
var bet = 1;

console.log("Welcome to Gambling Simulator");

console.log("Starting Stake for every day is: ",stake);
console.log("Bet is: ",bet);

var random = Math.floor(Math.random() * 2);

if(random == WON){
    stake += 1;
}else{ 
    stake -= 1;
}
console.log(stake);