const WON = 1;
const LOST = 0;
var stake = 100;
var bet = 1;
var total_won = 0;
var total_lost = 0;
var month = new Map();
var won = [];
var lost = [];

console.log("Welcome to Gambling Simulator");

console.log("Starting Stake for every day is: ",stake);
console.log("Bet is: ",bet);

for(let days = 1 ; days <= 20 ; days++){
    stake = 100;
    while( stake > 50 && stake < 150){
        var random = Math.floor(Math.random() * 2);
        if(random == WON){
            stake += bet;
            total_won += stake;
        }else{ 
            stake -= bet;
            total_lost += stake;
        }
        month.set(days,stake);
    }
}
console.log(stake);
console.log("Total Amount Won: ",total_won);
console.log("Total Amount Lost: ",total_lost);

for(let k of month.keys()){
    if(month.get(k) == 150){
        won.push(k);
    }
}

for(let l of month.keys()){
    if(month.get(l) == 50){
        lost.push(l);
    }
}

console.log("Days won are: "+won);
console.log("Days lost are: "+lost);

if(total_won > total_lost){
    console.log("You won  by: "+(total_won-total_lost));
}else{
    console.log("You lost by: "+(total_lost-total_won));
}