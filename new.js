/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/


/* // variable
var myName = "sahil" // global declaration
myName = 8
let outName= "jaiswal" // local declaration
const pi : 3.14 // never changed
*/

/*
// using variable

var a;
var b=2;
console.log(2);
a=7;
b=a;
console.log(b);

*/

/*
//string

var firstName = "sahil";
var lastName = "jaiswal";

var myStr = "I am a \"double quoted\" string inside \"double Quotes\"";
console.log(myStr);

myStr = '<a href="https://www.example.com" target="_blanck">Link</a>';
console.log(myStr);
 
myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

var ourStr = "I come first. "+ "I come Second.";
console.log(ourStr);  

ourStr = "I come first. ";
ourStr+="I come Third";
console.log(ourStr);

var myName = "Sahil";
myStr = "My name is "+ myName + " and I am well!";
console.log(myStr);
myName[0]='H'; // not possible to change individual char;
console.log(myName[0]);

*/

/*
//word blanks using function

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
    var result="";
    result+= "The "+myAdjective + " " + myNoun + " " +myVerb + " to the store "+ myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

*/

/*
//Array with it inbluit fintion

var ourArray = [1,2,3];
var ourData = ourArray[0];
console.log(ourData);
ourArray[1]=4;
console.log(ourArray);

var myArray = [[1,2,3], [4,5,6], [7,8,9]];

ourData =myArray[1][1];
console.log(ourData);

ourArray = ["sahil", " jaiswal", " from"];
ourArray.push([" Daman", " India."]);
console.log(ourArray);

//Multi-Dimentional Array
myArray = [["sahil",21], ["cat",3]];
myArray.push(["dog",1.5]);
console.log(myArray);

myArray = [["sahil",21], ["cat",3]];
myArray.pop();
console.log(myArray);

ourArray.shift();
console.log(ourArray);
ourArray.unshift("sahil1");
console.log(ourArray);

*/
/*
//function

function ourFunctionWithArgs(a,b)
{
    console.log(a-b);
}
ourFunctionWithArgs(10,5);

var myGlobal =10;
function fun1()
{
    oopsGlobal=5;
}

function fun2()
{
    var output = "";
    if(typeof myGlobal!= "undefined")
    {
        output+="myGlobal: "+myGlobal;
    }
    if(typeof oopsGlobal != "undefined")
    {
        output+=" oopsGlobal: "+ oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalScope()
{
    var myVar =5;
    console.log(myVar);
}
myLocalScope();

// console.log(myVar);

var outerWear = "T-shirt";
function myOutfit() {
    var outerWear="sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

var changed = 0;
function change(num){
    return (num+5)/3;
}
changed = change(10);
console.log(changed);

*/

/*
//boolean
function trueOrFalse(wasThatTrue){
    if(wasThatTrue)
        return "Yes, that is true!";
    return "No, that was false";
}
console.log(trueOrFalse(true))

*/

/*
//  operators
function testStrict(val){
    if(val==='10'){
        return "Equal";
    }
    else if(val==10)
    {
        return "Equal1";
    }
    return "Not Equal";
}

console.log(testStrict(10));

// 3==3
// 3==='3'
// &&  and
// || or

*/

/*
// if, else and else if

function testElesIf(val){
    if(val>10){
        return "Greater than 10";
    }
    else if(val<5){
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}
console.log(testElesIf(7));

*/

/*
// golf code

var names = ["Hole-in-one!" , "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!" ];

function golfScore(par,strokes){
    if(strokes==1)
        return names[0];
    else if(strokes <= par-2)
        return names[1];
    else if(strokes == par-1)
        return names[2];
    else if(strokes == par)
        return names[3];
    else if(strokes == par+1)
        return names[4];
    else if(strokes == par+2)
        return names[5];
    else if(strokes >= par+3)
        return names[6];
}

console.log(golfScore(5,8));

*/

/*
//switch statement

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1: 
            answer = "alpha";
            break;
        case 2: 
            answer = "beta";
            break;
        case 3: 
            answer = "gama";
            break;
        case 4: 
            answer = "delta";
            break;
        default:
            answer="staff";
    }
    return answer;
}

console.log(caseInSwitch(5));


function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer="low";
            break;
        case 4:
        case 5:
        case 6:
            answer="mid";
            break;
        case 7:
        case 8:
        case 9:
            answer="high";
            break;
    }
    return answer;
}
console.log(sequentialSizes(8));


*/

/*

//Counting cards

var count =0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "hold";
    if(count>0){
        holdbet = "bet";
    }
    return count + " " + holdbet;
    return "chnage me";
}

cc(2); cc('J'); cc(10); cc('K'); cc('A');
console.log(cc(4));  

*/

/*
//Build Objects and multiobjects and nested object

var ourDogs = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"],
};

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue+ " " + drinkValue);

ourDogs.name="snehal";
console.log(ourDogs["name"]);

ourDogs.bark = "bhow blow";
console.log(ourDogs);

delete ourDogs.bark;
console.log(ourDogs);



function phoneticLookup(val){
    var result ="";

    var lookup ={
        "alpha": "Adams",
        "bravo": "Bostan",
        "charlie": "chichango",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup('bravo'));

function checkObj(checkProp){
    if(ourDogs.hasOwnProperty(checkProp))
        return ourDogs[checkProp];
    else
        return "Not Found";
}

console.log(checkObj("legs"));
console.log(checkObj("hello"));


var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Ping Man",
        "release_year": 1973,
        "formats" :[
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    //add record here
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "Youtube Video"
        ]
    }
]

console.log(myMusic[1]["artist"]);


var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "album": "Robert Palmer",
        "tracks": [ ]
    },
    "5439" : {
        "album": "Abba Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if(value === "")
        delete collection[id][prop];
    else if(prop=== "tracks")
    {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(5439,"artist","ABBA"));
console.log(updateRecords(2468,"tracks","test"));
console.log(updateRecords(5439,"tracks","test"));

*/

/*
//loops

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

*/
/*
// profile lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Sahil",
        "lastName": "Jaiswal",
        "number": "0543236553",
        "likes": ["Rap Music", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Mandavi",
        "lastName": "Laine",
        "number": "0543236563",
        "likes": ["Burger", "Doctor", "Moti Daman"]
    }
]
function lookUpProfile(name, prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No such Contacts";
}

var data = lookUpProfile("Akira", "likes");

console.log(data);

*/


/*

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

 */
/*
 // Arrow Function

var magic = () => new Date();
console.log(magic);

// concat using arrow function
var myConcat = (arr,arr1) => arr.concat(arr1);

console.log(myConcat([1,2], [3,4,5]));

/*

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

*/

/*
//Template Literals

const person = {
    name: "sahil Jaiswa",
    age : 21
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting);

*/

/*

//using class

// Constructor

class SpaceShuttle {
   constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
   }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

function makeClass() {
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp=updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature =26;
temp = thermos.temperature;
console.log(temp);

*/

/*

//import and export

var capitalizeString = require("./string_function.js");
const cap = capitalizeString("hello!");

console.log(cap);



const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

console.log(foo);

import everything
import * as capitalizaString from "capitaliz_string";

import substract from "math_functions";

subtract(7,4);
*/

/*
// Promise

function func1(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log("Function: Your promise has been resolved")
                resolve();
            }
            else{
                console.log("Function:  Your promise has not been resolved");
                reject("sorry not fulfilled");
            }
        },2000);
    }) 
}

func1().then(function(){
    console.log("Sahil :Thanks for resolving");
}).catch(function(){
    console.log("Sahil: Very bad bro" + error);
})

const uno = () => {
    console.log("I am One");
};
const dos = () => {
    return new Promise(function(resolve, reject)  {
        setTimeout(() => {
            resolve("I am two");
        },3000);
    });
};
const tres = () => {
    console.log("I am Three");
};

const callMe = async() => {

    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();

*/