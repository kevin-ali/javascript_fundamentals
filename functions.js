<script>

// The Fortune Teller

function tellFortune(numOfChild, partner, loc, job) {

	console.log ("You will be a " + job + " in " + loc + ", and married to " + partner + " with " + numOfChild + " kids.");

}

tellFortune(17, "Meg", "Copenhagen", "Palentologist");
tellFortune(2, "Ella", "Warsaw", "Chief Engineer of a Submarine");
tellFortune(4, "Mel", "Prague", "Stripper");


// The Age Calculator

function calculateAge(birthYear, currentYear) {

	var currentAge = currentYear - birthYear;
	console.log ("You are either " + currentAge + " or " + (currentAge - 1));

}

calculateAge(1980, new Date().getFullYear());
calculateAge(2000, 2050);
calculateAge(1949, 2014);


function calculateSupply(age, amount) {

	var restOfLife = (99 - age) * 365 * amount;

	console.log ("You will need $" + Math.round(restOfLife) + " to last you to the ripe old age of 99.");

}

calculateSupply(33, 3);
calculateSupply(17, 9);
calculateSupply(42, 2.77);


// The Geometrizer

function calcCircumference(radius) {

	console.log ("The circumference of the circle is " + (radius * 2 * Math.PI));

}

function calcArea(radius) {

	console.log ("The area of the circle is " + (Math.PI * radius * radius));

}

calcCircumference(3);
calcArea(7);


// The Temperature Converter

(function() {

	var cels = 20;
	console.log(cels + " degrees C is " + ((9 / 5) * (cels + 32)) + " degrees F." );

})();

(function() {

	var far = 93.6;
	console.log(far + " degrees F is " + ((5 / 9) * (far - 32)) + " degrees C." );

})();


</script>

