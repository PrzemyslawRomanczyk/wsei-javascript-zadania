//Zadanie 0 /////////////////////////////////////////////////////////
function Basket() {
    this.name = [];
    this.price = [];
    this.sum = 0;
    this.addProduct = function(name, price) {
        this.name.push(name);
        this.price.push(price);
        this.sum += price;
    }
    this.showBasket = function() {
        for (var i = 0; i < this.name.length; i++) {
            console.log(this.name[i] + " " + this.price[i]);
        }
        console.log("Suma: " + this.sum);
    }
};
var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();