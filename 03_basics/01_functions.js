
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

} 

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

//addTwoNumbers(3,5)
function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
   return number1+ number2
   
 }

const result = addTwoNumbers(3,5)

// console.log("Result:", result);

function loginUserMessage(username="sam"){
    if(!username){
         console.log("please enter a username");
         return
    }
    return '${username} just logged in'
}
//console.log(loginUserMessage("bikky"))
//console.log(loginUserMessage())

function calculateCartPrice (val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user ={
    username: "bikky",
    price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

    
}

// handleobject(user)
handleobject({
    username:"bikky ",
    price:399
})

const myNewArray = [200,400,500,600]

function returnsecondvalue(getArray){
    return getArray[1]
}

//
log