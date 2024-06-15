const myArr = [1,2,3,4,5,6,7]
const myHero =["shaktiman","naagraj"]

const myarra2 = new Array(1,2,3,4,5,6)
// console.log(myArr[1]);

//array method 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)// add starting
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr);

// slice , splice

console.log("a", myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("b",myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2)

