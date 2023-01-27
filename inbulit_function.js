//Inbuild Function


// Random Number
Math.floor(Math.random()*20);
function randomWholeNum(){
    return Math.floor(Math.random()*20);
}
console.log(randomWholeNum());

function randomRange(myMin , myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(10, 20));

//parseInt

console.log(parseInt("56"));

function convertToInteger(str){
    return parseInt(str,2);
}
console.log(convertToInteger("10011"));

// var can be used to declare variable more than once with same name 
// but it is not possible in let

// using let
function checkScope() {
    "use Strict";
    let i = "Function scope";
    if(true){
        let i ="Block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ",i);
    return i;
}
 checkScope();

// using var

function checkScope() {
    "use Strict";
    var i = "Function scope";
    if(true){
        var i ="Block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ",i);
    return i;
}
 checkScope();

 //using const
  
 // if we declare any variable with const then we can't change it 

 function printManyTimes(str){
    "use strict";
    const sentence = str + " is cool!";
    // sentence = str + " is amazing!";

    for(var i=0;i<str.length;i++){
        console.log(sentence);
    }
 }
 printManyTimes("Knackroot");


 const s =[5,7,2];
 function editInPlace(){
    "use strict";

    // s =[2,5,7] this is not possible

    s[0]=2;
    s[1]=5;
    s[2]=7;
 }

 editInPlace();
 console.log(s);

 // prevent object mutation

 function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI =99;
    }
    catch  (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
 }
 const PI = freezeObj();
 console.log(PI);