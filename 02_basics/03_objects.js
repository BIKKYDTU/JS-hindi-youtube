// singleton

// object literals
//Object.create// eske through bhi object bana sakte hai
 const mySym = Symbol("key1")
const jsuser = {
    name: "bikky",
    age: 22,
    [mySym]: "mykey1",
    location: "patna",
    email: "bikky1610@gmail.com",
    isloggedIn: false,
    "full name ": "bikky kumar",
    lastloginDays:["monday","saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser[mySym])

jsuser.email = "kumarbikky8340@gmail.com"
//Object.freeze(jsuser)
jsuser.email = "tikkid58@gmail.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js uder");
    
}
jsuser.greetingTwo = function(){
    console.log('hello js user, ${this.name}');
    
    
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());




