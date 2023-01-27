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