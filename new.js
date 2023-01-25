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

