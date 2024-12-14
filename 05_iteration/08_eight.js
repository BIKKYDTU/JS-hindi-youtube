const myNums = [1,2,3]

// 

//const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
//console.log(myTotal);


const shoppingcart = [ 
        {
        itemname: "js course",
        price: 2999
        },
        {
        itemname: "cpp course",
        price: 999
        },
        {
        itemname: "ml course",
        price: 1999
        },
]

 // reduce used kar ke sara price jo cart me hai usko add karte hai

 const pricetopay = shoppingcart.reduce((acc, item) => acc+item.price,0)
 console.log(pricetopay);
 