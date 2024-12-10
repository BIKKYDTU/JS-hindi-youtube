// let a = 10
// const b = 20
let a =300

if(true){
    let a = 10
    const b = 20
    console.log("INNER:", a);
    
}

// console.log(a);
//console.log(b);

function one(){
    const username = "bikky"

    function two(){
        const website = "yputube"
        console.log(username);
    }
    //console.log(website);
    two()
}
// one()
if(true){
    const username = "amritesh"
    if(username === "amritesh"){
       const website = "youtube"
       console.log(username+website);
       
    }
    //console.log(website);
    
}
//console.log(username);

// +++++++++++++++++ intersting +++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}

addtwo(5)// declaration se phle use nahi kar sakte
const addtwo = function(num){
    return num + 2
}
