
var choices = ["Blackjack", "Poker", "Roulette", "Three Card Monte", "Craps", "Crazy Eights", "Chess", "Risk" ];
var i;

for (i = 0; i < choices.length; i++) {

	if (i === 0) {
		console.log("My 1st choice is " + choices[i]);
	} else if (i === 1) {
		console.log("My 2nd choice is " + choices[i]);
	} else if (i === 2) {
		console.log("My 3rd choice is " + choices[i]);
	} else {
		console.log("My " + (i+1) + "th choice is " + choices[i]);
	}

}
