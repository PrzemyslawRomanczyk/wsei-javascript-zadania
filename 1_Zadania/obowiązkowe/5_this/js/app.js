//Zadanie 0 /////////////////////////////////////////////////////////
var car = {
    brand: "Audi",
    color: "Black",
    numberOfKilometers: 0,
    printCarInfo: function() {
        console.log(car.brand);
        console.log(car.color);
        console.log(car.numberOfKilometers + "km");
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    }
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();

//Zadanie 1 /////////////////////////////////////////////////////////
var car = {
    brand: "Audi",
    color: "Black",
    numberOfKilometers: 0,
    services: ["01.10.2015", "01.10.2016", "01.10.2017"],
    printCarInfo: function() {
        console.log(car.brand);
        console.log(car.color);
        console.log(car.numberOfKilometers + "km");
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    },
    addNewService: function(service) {
        this.services.push(service);
    },
    printAllServices: function() {
        console.log(this.services);
    }
}

car.printCarInfo();
car.drive(20);
car.printCarInfo();
car.printAllServices();
car.addNewService("01.10.2018");
car.printAllServices();

//Zadanie 2 w pliku zadanie02.js /////////////////////////////////////////////////////////

//Zadanie 3 /////////////////////////////////////////////////////////
var stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep()