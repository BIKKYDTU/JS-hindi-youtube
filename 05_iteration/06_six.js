// const coding =["js", "ruby","java", "python", "cpp"]

// const values = coding.forEach( (item)  => {
//     console.log(item);
    
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((num){
//      return num>4
//})

 //const newNums= myNums.filter((num) => num>4)



// const newNums = []
// myNums.forEach((num) =>{
//     if(num>4){
//          newNums.push(num)
//     }
// })
//  console.log(newNums);
 
const books = [

{title:'book one', genere:'fiction', publish:1981,
    edition:2004},

{title:'book two', genere:'scince', publish:1982,
    edition:2003},

{title:'book 3', genere:'history', publish:1983,
    edition:2008},

{title:'book 4', genere:'gk', publish:1984,
    edition:2000},

{title:'book 5', genere:'polty', publish:1985,
    edition:2004},

{title:'book 6', genere:'grammar', publish:1986,
    edition:2006},

{title:'book 7', genere:'indian history ', publish:1987,
    edition:2007},

{title:'book 8', genere:' history', publish:1988,
    edition:2004},

{title:'book 9', genere:'english grammer', publish:1989,
    edition:2003},

{title:'book 10', genere:'social science', publish:1990,
    edition:2009},

];
let userBooks = books.filter((bk) => bk.genre ==='History')
userBooks = books.filter((bk) => {return bk.publish >= 2000})
console.log(userBooks);