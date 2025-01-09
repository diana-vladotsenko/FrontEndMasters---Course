const numbers = [1,2,3,4,5,6,7];
let u = numbers.length;
console.log(u);

let j = numbers.join("-")
console.log(j);
const teacher = [
    {teacher : "Sam Smith" ,course: "Introduction to Node.js"},
    {teacher: "Anna Link", course: "Introduction to Databases"},
    {teacher: "Jen Kramer", course: "Introduction to Java"},
];
console.log(teacher);
console.log(teacher.length);
teacher.push({teacher: "Someone else", course:"Something else"});
console.log(teacher);
console.log(teacher.length);

teacher[2].teacher = "Changed.";
console.log(teacher);


const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(i, cities[i]);
}

// method 2
function logCity (city) {
    console.log(city);
}
cities.forEach(logCity);
