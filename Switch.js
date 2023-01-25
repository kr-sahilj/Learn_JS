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
