const WON = 1;
const LOST = 0;
var stake = 100;
var bet = 1;
var total_won = 0;
var total_lost = 0;
var month = new Map();
var won = [];
var lost = [];
var bets_won = 0;
var bets_lost = 0;
var max_won = new Map();
var max_lost = new Map();

console.log("Welcome to Gambling Simulator");

console.log("Starting Stake for every day is: ",stake);
console.log("Bet is: ",bet);

for(let days = 1 ; days <= 20 ; days++){
    stake = 100;
    bets_lost = 0;
    bets_won = 0;
    while( stake > 50 && stake < 150){
        var random = Math.floor(Math.random() * 2);
        if(random == WON){
            stake += bet;
            bets_won += 1;
            total_won += stake;
        }else{ 
            stake -= bet;
            bets_lost += 1;
            total_lost += stake;
        }
        month.set(days,stake);
        max_won.set(days,bets_won);
        max_lost.set(days,bets_lost);
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

var biggest = max_won.get(1);
var smallest = max_lost.get(1);

for(let j of max_won.values()){
    if(j > biggest){
        biggest = j;
    }
}

for(let k of max_won.keys()){
    if(max_won.get(k) == biggest){
        console.log("The Luckiest Day is:",k);
    }
}

for(let f of max_lost.values()){
    if(f < smallest){
        smallest = f;
    }
}

for(let l of max_lost.keys()){
    if(max_lost.get(l) == smallest){
        console.log("The Unluckiest Day is:",l);
    }
}
