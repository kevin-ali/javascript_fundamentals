<script>

// What Number's Bigger?

	function greaterNum(num1, num2) {

		if (num1 > num2) {
			console.log(num1 + " is greater than " + num2);
		}else if (num1 < num2){
			console.log(num2 + " is greater than " + num1);
		}else {
			console.log(num1 + " is equal to " + num2);
		}

	}

	greaterNum(5, 10);
	greaterNum(15, 5);
	greaterNum(20, 20);


// The World Translator

	function helloWorld(language) {

		if (language === "en") {
			console.log("Hello, world!");
		}else if (language === "fr") {
			console.log("Allo, monde!");
		}else if (language === "it") {
			console.log("Ciao, mondo!");
		}else {
			console.log("Hello, world!");
		}

	}

	helloWorld("it");
	helloWorld("en");
	helloWorld("fr");
	helloWorld("xx");


// The Grade Assigner

	function assignGrade(score) {
		if (score >= 80) {
			console.log(score + " equals an A!");
		} else if ((score >= 70) && (score < 80)) {
			console.log(score + " equals a B!");
		} else if ((score >= 60) && (score < 70)) {
			console.log(score + " equals a C!");
		} else if ((score >= 50) && (score < 60)) {
			console.log(score + " equals a D!");
		} else {
			console.log("You fail.");
		}

	}

	assignGrade(44);
	assignGrade(80);
	assignGrade(62);
	assignGrade(76);
	assignGrade(55);


// The Pluralizer

	function pluralize(noun, number) {
		if (number !== 1) {
			console.log(number + " " + noun + "s.");
			}else {
			console.log(number + " " + noun + ".");
			}

	}

	pluralize("dog", 2);
	pluralize("cat", 0);
	pluralize("lama", 3);
	pluralize("goat", 1);


</script>