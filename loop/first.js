// const coding = ["js","rubyy","python","cpp"]


//  const values = coding.forEach((item)=>{
//      console.log(item);
//      return item
// })

// console.log(values);

///  use of filter 

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num) => num >4 )

const newNums = myNums.filter((num) =>{
    return num>4
})
// console.log(newNums);



// map uses 

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers= myNumbers.map((num) => num+10)

const newNumss= myNums
            .map((num) => num*10 )
            .map((num) => num+1)
            .filter((num) => num >= 40)

console.log(newNumss)

