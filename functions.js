function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
  }
  
  console.log(greet("Brian", "Holt", "Lord", "Salutations"));
  console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

function shop(clothes, price){
    return `${clothes} with the price of ${price}`
}
console.log(shop("t-shirt", "10.99$"))
console.log(shop("pants","18.99$"))


function hello() {
    console.log("Hey!");
}

const hey = function() {
    console.log("Hello.");
};

const heyhello = () => {
    console.log("HeyHello.");
};

hello();
hey();
heyhello();