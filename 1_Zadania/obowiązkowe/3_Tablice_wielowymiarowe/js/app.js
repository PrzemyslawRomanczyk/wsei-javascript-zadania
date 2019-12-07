var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Zadanie 0 /////////////////////////////////////////////////////////
var checkArray = function(inputArray) {
    var outputArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        outputArray[i] = true;
        for (var j = 0; j < inputArray[i].length; j++) {
            if (inputArray[i][j] % 2 != 0) {
                outputArray[i] = false;
            }
        }
    }
    return outputArray;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];
checkArray(arr);

//Zadanie 1 /////////////////////////////////////////////////////////
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);

//Zadanie 2 /////////////////////////////////////////////////////////
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for (var i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}
for (var i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}
for (var i = 0; i < task2Array.length; i++) {
    for (var j = 0; j < task2Array[i].length; j++) {
        console.log(task2Array[i][j]);
    }
}

//Zadanie 3 /////////////////////////////////////////////////////////
var print2DArray = function(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                console.log(arr[i][j]);
            }
        }
    }
    //Zadanie 4 /////////////////////////////////////////////////////////
var new_arr = [
    [1, 2, 3],
    [11, 12, 13],
    [21, 22, 23],
];
print2DArray(new_arr);

//Zadanie 5 /////////////////////////////////////////////////////////
var create2DArray = function(rows, columns) {
    var c_arr = [];
    var k = 1;
    for (let i = 0; i < rows; i++) {
        c_arr.push([]);
        for (let j = 0; j < columns; j++) {
            c_arr[i].push(k);
            k++;
        }
    }
    return c_arr;
}
create2DArray(4, 4);