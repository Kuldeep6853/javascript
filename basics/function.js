// function 

function sayHello(){
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}

// sayHello()

function addTwoNumber(number1, number2){
    // console.log(number1+number2);
}

// addTwoNumber(2,7)
// addTwoNumber(3, "6")

function addTwoNumber(number1, number2){
    // let result = number1+number2
    // return result 
    return number1+number2
}


const result = addTwoNumber(3,5) 
// console.log("result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());