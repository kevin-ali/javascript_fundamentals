
<script>

// The Fortune Teller

var numOfChild = "3";
var partnerName = "Jill";
var geoLocation = "Toronto";
var jobTitle = "Astronaut";

console.log ("You will be an " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numOfChild + " kids.");




// The Age Calculator

var currentYear = 2014;
var birthYear = 1980;

var currentAge = currentYear - birthYear;

console.log ("They are either " + currentAge + " or " + (currentAge - 1));



// The Lifetime Supply Calculator

var currentAge = 33;
var maxAge = 99;
var amountPerDay = 3;
var restOfLife = (maxAge - currentAge) * 365 * 3;

console.log ("You will need $" + restOfLife + " to last you to the ripe old age of " + maxAge + ".");


// The Geometrizer

var rad = 8;

console.log ("The circumference of the circle is " + (rad * 2 * Math.PI));
console.log ("The area of the circle is " + (Math.PI * rad * rad));


// The Temperature Converter

var cels = 20;
var far = 93;

console.log(cels + " degrees C is " + ((9 / 5) * (cels + 32)) + " degrees F." );
console.log(far + " degrees F is " + ((5 / 9) * (far - 32)) + " degrees C." );

</script>


