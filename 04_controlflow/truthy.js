const useremail = []

if (useremail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
    
}


// falsy values
// false, 0 ,-0, Bigint 0n, "", null, undefined,NaN
// TRUTHY VALUES =>  "0",'false'," ",[],{}, function(){},

// 



// const emptyobj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
    
// }


// nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);




// ternary operator

// condition ? true: false 

const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80"): console.log("more than 80");

