 const person = {
     name: {
         firstName: "Diana",
         lastName: "Di",
     },
     location: {
         country: "Estonia",
         city: "Tallinn",
         street: "Fakestreet",
         houseNumber: 59,
         postcode: "0000",
     },

     getPerson() {
         return `${this.name.firstName} ${this.name.lastName} ${this.location.country} ${this.location.city} ${this.location.street} ${this.location.houseNumber} ${this.location.postcode}`;
     },
 };

 console.log(person.getPerson());
