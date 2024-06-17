// function calculateCardPrice(...num1){   // rest oprator
//     return num1
// }


function calculateCardPrice(val1, val2, ...num1){   // rest oprator
    return num1
}
// console.log(calculateCardPrice(200,300,400));

const user={
     userame:"hitesh",
     prices:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userame} and price is${anyobject.prices}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    prices: 300
})


const mynewArray = [233,455,532,522]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));

