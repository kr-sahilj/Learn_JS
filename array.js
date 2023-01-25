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
