function distFromAverage(array){
    let sum = 0;

    array.forEach(element => {
        sum += element;
    })

    let average = sum / array.length;

    return array.map(element => {
        return element - average;
    })
}

console.log(distFromAverage([1,2,3,4,5,6,7]))


const fruits = ['banana', 'apple', 'watermelon']

console.log('Pierwszy: ' +fruits[0] + '\nOstatni: ' + fruits[fruits.length - 1])

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



 