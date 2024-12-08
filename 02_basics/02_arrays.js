//const marval_heros =["bikky", "amritesh", "ankit"]
// const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros);

//const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const  another_array = [1,2,3,[4,5,6],[6,7,[5,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

Array.isArray(Array.isArray("bikky"))
console.log(Array.from("bikky"));
console.log(Array.from({name:"bikky"}));// interesting 

let score1=100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



