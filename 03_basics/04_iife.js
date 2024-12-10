// immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();// yaha semi column lagana padta hai directely nahi lagta hai

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('bikky')