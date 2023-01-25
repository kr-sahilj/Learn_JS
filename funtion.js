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