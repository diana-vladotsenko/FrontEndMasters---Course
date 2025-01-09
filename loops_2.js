//Loops

let number=0;
while (number <= 10){
    number +=1;
    number =number + 1;
    number ++;
    ++number;   
}
console.log(number);

for (let i = 0; i <= 10; i++) {
  number++;
}
console.log(number);

//Loop Exercise:
/*
Write some code that declares two variables, character and timesToRepeat.
Using a loop, repeat that character that many times and then console.log it.
Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log 'fffff'.
Try a few different combinations to make sure you got it right e.g. 'a' and 10, 'c' and 100, '🐶' and 3.

Why?
This is just an exercise to get you flex your newly-gained muscles a bit. This code itself wouldn't be super useful but it'll be useful for you to try to take an idea in words and translate that into workable code.
*/

let character = "a";
let timesToRepeat = 5;  
let character_m = "";
for (let i=0 ; i<timesToRepeat; i++){
    console.log(character);
}


let word = ""; // start with an empty string
for (let i = 0; i < timesToRepeat; i++) {
    character_m = character_m + character;
}
console.log(character_m);