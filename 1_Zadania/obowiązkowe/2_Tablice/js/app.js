function distFromAverage(inputArray){
    var sum = 0;
    for(var i=0; i < inputArray.length; i++){
        sum += inputArray[i];
    }
    var averge = sum/inputArray.length;
    var newArray=[];
    for(var i=0; i < inputArray.length; i++){
        newArray.push(inputArry[i]-averge);
    }
    return newArray;
}
distFromAverage([1,2,3,4,5,6,7]);

var array= ["Banan","sliwka","gruszka","jablko"];

console.log(array[0]);
console.log(array[array.length-1]);

for(var i=0; i<array.length; i++){
    console.log(array[i]);
}

function printTable(array){
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    }
}
printTable([1,2,3,4]);

function multipleArray(array){
    var summary=1;
    for(var i=0; i<array.length; i++){
        summary = summary * array[i];
    }
    console.log(summary);
}

multipleArray([1,2,3,4,5,6,7]);

function getEvenAverage(array){
    var average = 0;
    var array2 = [];
    var summary = 0;
    for(var i=0;i<array.length;i++){
        if(array[i]%2===0){
            array2.push(array[i]);
        }
    }
    for(var i=0;i<array2.length;i++){
        summary +=array2[i];
    }
    average = summary/array2.length;
    console.log(average);
}

getEvenAverage([1,2,3,4,5,6,7]);
getEvenAverage([1,1,1,1]) ;
getEvenAverage([2,8,3,7,4]) ;