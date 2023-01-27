//while

var myArray = [];

var i=0;
while(i<5){
    myArray.push(i);
    i++;
}

console.log(myArray);

//do while

var myArray3 = [];
var i=10;
do {
    myArray3.push(i);
    i--;
}
while (i>5)

console.log(i,myArray3);
//for

var myArray1 = [];
var ourArray1 = [];
var myArray2 = [];
var ourArray2 = [];


for(var i=0;i<5;i++){
    myArray1.push(i);
}

for(var i=0;i<=6;i+=2){
    ourArray1.push(i);
}

console.log(myArray1);
console.log(ourArray1);

for(var i=4;i>=0;i--){
    myArray2.push(i);
}
for(var i=6;i>=0;i-=2){
    ourArray2.push(i);
}

console.log(myArray2);
console.log(ourArray2);

// nesting for loops

function multiplyAll(arr){
    var product = 1;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

