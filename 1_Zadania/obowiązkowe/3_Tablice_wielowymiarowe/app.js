var task1Array =[
    [2,3],
    ["Ala","Ola"],
    [true,false],
    [5,6,7,8],
    [12,15,67]
];

var task2Array= [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

var checkArray = function(inputArray) {
    var outputArray = []
    for(let col = 0; col<inputArray.length; col++){
        outputArray[col] = false;
        for(let row = 0; <inputArray[col].length;row++)
        {
            if (inputArray[col[row]] %2 != 0){
                outputArray[col]= false;
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

    //Zadanie 1
    console.log(task1Array[3][2]);
    console.log(task1Array[2].length);
    console.log(task1Array[4][2]);
    //Zadanie 2
    for(var i=0;i<task2Array.length;i++){
        console.log(task2Array[i]);
    }
    for(var i=0;i<task2Array.length;i++){
        console.log(task2Array[i].length);
    }
    for(var i=0;i<task2Array.length;i++){
        for(var j=0;j<task2Array[i].length;j++){
            console.log(task2Array[i][j].length);
        }
    }
    //Zadanie3
    var print2DArray = function(arr){
        for(let i=0; i< arr.length;i++){
            for(let j=0; j< arr[i].length;j++){
                console.log(task2Array[i][j].length);
            }
        }
    }
    //Zadanie4
    var new_arr = [
        [1,2,3],
        [11,12,13],
        [21,22,23],
    ];
    print2DArray(new_arr);
    //Zadanie5
    var create2DArray= function(rows,columns){
        var c_arr = [[]];
        var k = 1;
        for(let i=0; i< rows;i++){
            for(let j=0; j< columns;j++){
                c_arr[i][j]=k;
                k++;
            }
        }
    }