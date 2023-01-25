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