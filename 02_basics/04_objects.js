// const tinderUser = new Object() 
 const tinderUser = {}

 tinderUser.id = "123abc"
tinderUser.name = "bikky"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser = {
    email: "bikky1610@gmail.com",
    fullname : {
        userfullname:{
        firstname:"bikky",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname);
const Obj1 ={1:"a", 2:"b"}
const Obj2 ={3: "a", 4:"b"}
// const Obj3 = {Obj1, Obj2}
// const Obj3 = Object.assign({},Obj1,Obj2);
const Obj3 = {...Obj1, ...Obj2}
console.log(Obj3);

const user =[
    {
        id:1,
        email: "h@gmail.com"
    },
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// YE CODE MR ERROR SHOW KAR RAHA HAI