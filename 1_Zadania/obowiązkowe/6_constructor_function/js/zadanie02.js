var Calculator = function() {
    this.table = [];
}

Calculator.prototype.add = function(num1, num2) {
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    this.table.push("added " + num1 + " to " + num2 + " got " + (num1 + num2));
}

Calculator.prototype.multiply = function(num1, num2) {
    console.log(num1 + " * " + num2 + " = " + num1 * num2);
    this.table.push("multiply " + num1 + " with " + num2 + " got " +
        num1 * num2);
}

Calculator.prototype.subtract = function(num1, num2) {
    console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    this.table.push("subtract " + num1 + " from " + num2 + " got " +
        (num1 - num2));
}

Calculator.prototype.divide = function(num1, num2) {
    console.log(num1 + " / " + num2 + " = " + num1 / num2);
    this.table.push("divide " + num1 + " by " + num2 + " got " +
        num1 / num2);
}

Calculator.prototype.printOperations = function() {
    console.log("All operations: ");
    for (var i = 0; i < this.table.length; i++) {
        console.log(this.table[i]);
    }
}

Calculator.prototype.clearOperations = function() {
    this.table = [];
    console.log("Operations cleared");
}

var calc = new Calculator();
calc.add(2, 3);
calc.multiply(3, 4);
calc.subtract(5, 2);
calc.divide(6, 3);
calc.printOperations();
calc.clearOperations();
calc.printOperations();