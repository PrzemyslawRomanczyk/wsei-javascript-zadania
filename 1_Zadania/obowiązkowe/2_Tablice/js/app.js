//Zadanie 0 /////////////////////////////////////////////////////////
function distFromAverage(inputArray) {
    var sum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
    }
    var averge = sum / inputArray.length;
    var distance = 0;
    var newArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        distance = averge - inputArray[i];
        if (distance < 0) {
            distance = distance * (-1);
        }
        newArray.push(distance);
    }
    return newArray;
}
var array = [1, 2, 3, 4, 5, 6, 7];
console.log(distFromAverage(array));
console.log(distFromAverage([1, 1, 1, 1]));
console.log(distFromAverage([2, 8, 3, 7]));
//Zadanie 1 ////////////////////////////////////////////////////////

var array = ["Banan", "sliwka", "gruszka", "jablko"];

console.log(array[0]);
console.log(array[array.length - 1]);

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Zadanie 3 ////////////////////////////////////////////////////////
function printTable(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printTable([1, 2, 3, 4]);

//Zadanie 4 ////////////////////////////////////////////////////////
function multipleArray(array) {
    var summary = 1;
    for (var i = 0; i < array.length; i++) {
        summary = summary * array[i];
    }
    console.log(summary);
}

multipleArray([1, 2, 3, 4, 5, 6, 7]);
multipleArray([1, 1, 1, 1]);
multipleArray([2, 8, 3, 7]);

//Zadanie 5 ////////////////////////////////////////////////////////
function getEvenAverage(array) {
    var average = 0;
    var array2 = [];
    var summary = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array2.push(array[i]);
        }
    }
    for (var i = 0; i < array2.length; i++) {
        summary += array2[i];
    }
    if (summary == 0) {
        average = null;
    } else {
        average = summary / array2.length;
    }
    console.log(average);
}

getEvenAverage([1, 2, 3, 4, 5, 6, 7]);
getEvenAverage([1, 1, 1, 1]);
getEvenAverage([2, 8, 3, 7, 4]);

//Zadanie 6 ////////////////////////////////////////////////////////
function sortArray(array) {
    var array2 = 0;
    array2 = array.sort();
    console.log(array2);
}
sortArray([145, 11, 3, 64, 4, 6, 10]);

//Zadanie 7 ////////////////////////////////////////////////////////
function addArrays(array1, array2) {
    var array3 = [];
    var length = 0;
    var length2 = 0;
    var longerArry = [];
    if (array1.length > array2.length) {
        length = array2.length;
        longerArry = array1;
    } else {
        length = array1.length;
        longerArry = array2;
    }

    for (var i = 0; i < length; i++) {
        array3.push(array1[i] + array2[i]);
    }
    for (var i = length; i < longerArry.length; i++) {
        array3.push(longerArry[i]);
    }

    console.log(array3);
}
addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]);
addArrays([8, 3, 22], [1, 3, 2]);
addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]);