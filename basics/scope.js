let a=10

if (true){
    let a=20
    const b=40
    
    // console.log("inner a", a);
}

// console.log("a",a);


function one(){
    const username ="hitesh"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one()
// child function can acces the parent function value but 
//the parent function can't acces the vakue of the child function

if(true){
    const username = "hitesh"
    if(username === " hitesh"){
        const website = "youtube"
        console.log( username + website);
    }
    // console.log(website);
}

// console.log(username)


//+++++++++++++++intersting ++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num +1
}

addtwo(5)  // in this setuation we cann't acces the value error
const addtwo = function(num){
    return num +2
}
/* when a function stored in to the variable the before 
decleration we cann't call the function  */