function hi() {
    let string = "Hi,pukie";
    string = string.substring(3);
    return string
}
console.log(hi())

const number = 7.3;
const roundedNumber = Math.round(number);
console.log(roundedNumber);

let number_2= 9.023;
const roundedNumber_2 = Math.floor(number_2);
console.log(roundedNumber_2);

let randomNumbers = Math.round(Math.random()*10);

let g = [1,3,5,6]
for (let i = 0;i <= g.length; i++) {
  let randomNumbers = Math.round(Math.random()*10);
    g.push(randomNumbers);
    break
}
console.log(g);


const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo = "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";
const testString = "execute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));
console.log(testString.includes(stringToLookFor));

console.log(Date.now());