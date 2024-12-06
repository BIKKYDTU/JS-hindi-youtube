const name ="bikky"
const repoCount = 50

//console.log(name+repoCount+"value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('bikkyk-umar');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringone ="   bikky   "
console.log(newStringone);
console.log(newStringone.trim());

const url = " https//bikky.com/%20kumar"
console.log(url.replace('%20', '-'))


console.log(url.includes('bikky'))

console.log(gameName.split('-'));

