// singleton
// object.create

//object literals 

const mysym = Symbol("key1")  // symbol use in object 


const jsUser ={
    name: "hitesh",
    "full name ":"kuldeep singh",
    age: 18,
    [mysym]:"mykey1",
    location: "jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"])
// console.log(jsUser[mysym]);


jsUser.email = "kuldeepsingh@gmail.com"
// console.log(jsUser.email);
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting= function(){
    console.log("hello Js user");
}

jsUser.greetingTwo= function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
