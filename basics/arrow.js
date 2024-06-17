const user ={
    username :"hitesh",
    prices :999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);  // empty obect

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)  // conn't acces the value
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)  // undefined
// }  

const chai = () => {
        let username = "hitesh"
        //console.log(this.username)  
    }  
    // undefined

chai()


// const addTwo =( num1, num2) =>{
//     return num1+num2
// }

//   another way to declear the arrow function if the one line of code

// const addTwo = (num1 , num2) =>  num1+ num2

const addTwo = (num1 , num2) =>  (num1+ num2)
console.log(addTwo(4,6));


