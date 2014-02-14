// The Recipe Card

var myRecipe = {
	title: "My Awesome Recipe",
	servings: 4,
	ingredients: ["beef", "lamb", "goat", "chicken", "parsley"]
};


console.log(myRecipe.title);
console.log("Serves: " + myRecipe.servings);
console.log("Ingredients:");
console.log(myRecipe.ingredients[0]);
console.log(myRecipe.ingredients[1]);
console.log(myRecipe.ingredients[2]);
console.log(myRecipe.ingredients[3]);
console.log(myRecipe.ingredients[4]);


// The Reading List


function book(title, author, alreadyRead) {
	this.title = title;
	this.author = author;
	this.alreadyRead = alreadyRead;
}

var book1 = new book("Heart of Darkness", "Joseph Conrad", true);
var book2 = new book("Moby Dick", "Hernan Mellville", true);
var book3 = new book("Great Expectations", "Charles Dickens", true);
var book4 = new book("David Copperfield", "Charles Dickens", false);


var readingList = [book1, book2, book3, book4];

for (var b in readingList) {

	if (readingList[b].alreadyRead === true) {
		console.log("You have already read " + readingList[b].title + " by " + readingList[b].author);
	} else {
		console.log("You still need to read " + readingList[b].title + " by " + readingList[b].author);
	}
}



// The Movie Database

var favouriteMovie = {
  title: "Scent of a Woman",
	duration: 90,
	stars: ["Al Pacino", "Chris O Donnell", "Philip Seymour Hoffman"]
};


(function() {
	console.log(favouriteMovie.title + " lasts for " + favouriteMovie.duration + " mins.  Stars: " + favouriteMovie.stars[0] + ", " + favouriteMovie.stars[1] + ", and " + favouriteMovie.stars[2] + ".");
})();