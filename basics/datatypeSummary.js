//  primitive

// 7 types : String ,Number, Boolean , Null, Undefined, Symbol
//BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 console.log(id === anotherId);


// Reference (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj","doga"];
let myObj={
    name: "hitesh",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitive) , Heap(Non- primitive)

// value pass
let myYoutubename = "kuldeepSinghdotcom"

let anothername = myYoutubename
 anothername= "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)


// reference pass
let userOne ={
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "helloworld@mail.com"

console.log(userOne.email);
console.log(userTwo.email);


