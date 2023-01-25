
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
