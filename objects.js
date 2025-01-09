const person = {
  name: "Di",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};
console.log(person); //whole person
console.log(person.name); //a key/property of object(person)

const person1 = {
  name: "Angie",
  ageRange: "25-35",
};
const person2 = {
  name: "Francesca",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you will like Daft Punk.");
  } else if (person.ageRange === "65-75") {
    console.log("You are obviously going to like Johnny Cash.");
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);

const user_1 = {
    name: "Andie",
    age: 21,
    hobby : "drawing",
};
const user_2 = {
    name: "Harrold",
    age: 30,
    hobby : "skating",
};

function suggestSomething(person){
    if(person.age>20) {
        console.log("Suggesting something..");
    } else if (person.hobby === "drawing") {
        console.log("Something here too..");
    } else {
        console.log("...");
    }
}
suggestSomething(user_1);
suggestSomething(user_2);

const cat = {
  name: "cat",
  speak() {
    console.log("meow");
  },
};

cat.speak();

console.log(console);
console.log(Math.PI);