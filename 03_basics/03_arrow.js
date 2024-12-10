const user = {
    username: "bikky",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},weicome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "amritesh"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "bikkykumar"
//     console.log(this.username);//this.username ko hum function ke ander use nahi kar sakte
    
// }

// chai()


// const chai = function(){
//     let username = "amritesh"
//     console.log(this.username);
    
// }

const chai = ()=> {
    let username = "amritesh"
    console.log(this.username);
    
}
//chai()

// explicit return jab return keyword lagana padta hai
// emplicit return not use return keyword
// const addTwo =(num1, num2) => num1 + num2
// const addTwo =(num1, num2) => (num1 + num2)
const addTwo =(num1, num2) => ({username:"amritesh"})
console.log(addTwo(3,8))
