// primitive datatypes

// 7 types: string, number, null,undefined,symbol,bigint

// const score = 100
// const scorevalue =100.3

// const isloggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);





// reference type(non primitive)

// array , objects,functin

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name : "bikky",
//     age : 23,
// }

// const myfunction= function(){
//     console.log("hello world");
    
// }

// console.log(typeof outsideTemp);


// ***********************   ********************
// stack(premative), Heap(non premitive)

let myYoutubename = "jycolyra.com "
let anothername = myYoutubename
anothername = "chaiurcode"
  
console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}
  
let userTwo = userOne

userTwo.email = "amritesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




