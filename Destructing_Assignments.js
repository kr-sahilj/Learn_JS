// rest , spread, and destructing Assignments
const realNumbrArray = [4, 5.6, -9.8, 3.14, 42,6,-2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num>0).map( x => x*x);
    return squaredIntegers;
}
const squaredIntegers = squareList(realNumbrArray);
console.log(squaredIntegers);


//increment function
const increment = (function(){
    return function increment(number,value =1){
        return number + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

// using rest operator

const sum = (function() {
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3));

// using spread operator

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato';
})();
console.log(arr2);
console.log(arr1);


//Destructing Assignment

var voxel = {a: 3.6, b: 7.4, c:6.54 };

const voxel1 = { x:a, y:b, z:c } = voxel;
console.log(voxel1);


const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tommorrow : {min: 73.3, max : 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";

    const {tommorrow: {max: maxOfTommorrow}} = forecast;
    return maxOfTommorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

const [z,x, , y] = [1,2,3,4,5,6];
console.log(z,x,y);
