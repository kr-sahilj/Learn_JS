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
