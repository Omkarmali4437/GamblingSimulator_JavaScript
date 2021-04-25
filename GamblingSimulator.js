const WON = 1;
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

console.log("Starting Stake for every day is: ", stake);
console.log("Bet is: ", bet);

function startgame() {

    for (let days = 1; days <= 20; days++) {
        stake = 100;
        bets_lost = 0;
        bets_won = 0;
        while (stake > 50 && stake < 150) {
            var random = Math.floor(Math.random() * 2);
            if (random == WON) {
                stake += bet;
                bets_won += 1;
                total_won += stake;
            } else {
                stake -= bet;
                bets_lost += 1;
                total_lost += stake;
            }
            month.set(days, stake);
            max_won.set(days, bets_won);
            max_lost.set(days, bets_lost);
        }
    }

    console.log("Total Amount Won: ", total_won);
    console.log("Total Amount Lost: ", total_lost);

    if (total_won > total_lost) {
        console.log("You won  by: " + (total_won - total_lost));
    } else {
        console.log("You lost by: " + (total_lost - total_won));
    }

    getDayWonandLost();
    getluckiestday();
    getunlukiestday();
}

function getDayWonandLost() {

    for (let k of month.keys()) {
        if (month.get(k) == 150) {
            won.push(k);
        }
    }

    for (let l of month.keys()) {
        if (month.get(l) == 50) {
            lost.push(l);
        }
    }

    console.log("Days won are: " + won);
    console.log("Days lost are: " + lost);
}

function getluckiestday() {
    
    let arr = [...max_won.values()];

    let sortedarr = arr.sort((a, b) => b - a );

    for ([key, values] of max_won) {
        if (sortedarr[0] == values)
            console.log("The luckiest day is: ",key);
    }
}

function getunlukiestday() {

    let arr = [...max_lost.values()];

    let sortedarr = arr.sort((a, b) => a - b);

    for ([key, values] of max_lost) {
        if (sortedarr[0] == values)
            console.log("The unluckiest day is: ",key);
    }
}

startgame();

var string = require("readline-sync");
var answer = string.question("Do you want to play again: ");

if (answer == "yes" || answer == "y") {
    startgame();
} else {
    console.log("Thank you for playing")
}