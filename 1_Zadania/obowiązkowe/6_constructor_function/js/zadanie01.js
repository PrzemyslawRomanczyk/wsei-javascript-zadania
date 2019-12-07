var Robot = function(name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function(newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function() {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var robot1 = new Robot("Robot1");
var robot2 = new Robot("Robot2");
var robot3 = new Robot("Robot3");
var robot4 = new Robot("Robot4");
var robot5 = new Robot("Robot5");

robot1.sayHi("Przemek");
robot2.sayHi("Przemek");
robot3.sayHi("Przemek");
robot1.fixIt();

robot1.changeName("SuperRobot");
robot1.sayHi(robot5.name);
robot5.fixIt();
robot1.fixIt();