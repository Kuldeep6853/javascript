//  reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, curvel){
//     console.log(`acc: ${acc} and currval: ${curvel}`);
//     return acc+curvel
// }, 0)

const myTotal = myNums.reduce((acc, curr ) => acc+curr, 0) 

console.log(myTotal)