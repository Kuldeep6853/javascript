//  dates

 let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

//  let myCreatedDate = new Date(2023, 0, 23 )
// let myCretedDate = new Date (2023, 0 , 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//  console.log(myCreatedDate.toLocaleDateString());


let myTimeStemp = Date.now()

// console.log(myTimeStemp);
// console.log(myCreatedDate.getTime());


// for changing ms to sec 
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())



newDate.toLocaleString('default',{
    weekday: "long"
})