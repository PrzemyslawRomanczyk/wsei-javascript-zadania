//Zadanie 0a /////////////////////////////////////////////////////////
var city = {
    capital: "Warszawa",
    population: 38,
    president: "prezydent",
    primeMinisters: ["minister1", "minister2", "minister3"]
}

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//Zadanie 0b /////////////////////////////////////////////////////////
var timeMachine = {};
timeMachine.shape = "rectangle";
timeMachine.model = "model1";
timeMachine.run = function(date, place) {
    this.date = date;
    this.place = place;
    console.log(this.shape);
    console.log(this.model);
    console.log(this.date);
    console.log(this.place);
}
timeMachine.run("1.1.2001", "Warsaw");

//Zadanie 1 /////////////////////////////////////////////////////////

var book = {};
book.title = "Potop";
book.author = "Sienkiewicz";
book.numberOfPages = "600";
console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

//Zadanie 2 /////////////////////////////////////////////////////////
var person = {};
person.name = "Tomek";
person.age = "25";
person.sayHello = function() {
    console.log("Hello");
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3 /////////////////////////////////////////////////////////
var recipe = {
    title: "Chilli Con Carne",
    servings: "4",
    ingredients: ["Mięso", "ryż", "sos pomidorowy", "kukurydza", "czerwona fasola"]
}
recipe.ingredients.push("ser");
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

// Zadanie 4 i 5 w plikach zadanie04.js i zadanie05.js

//Zadanie 6 /////////////////////////////////////////////////////////
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist = false;

console.log(spoon.isExist);