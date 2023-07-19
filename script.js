class Hamster {
    constructor(owner, name, price) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }

    // methods
    wheelRun() {
        console.log('squeak squeak');
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    // methods

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        console.log(`Hello, ${this.name}`);
    }

    eat(){
        this.weight++;
        this.mood++;
    }

    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

// Instantiate a new Person named Timmy
const timmy = new Person('Timmy');

// Age Timmy 5 years
for (let i = 1; i <= 5; i++){
    timmy.ageUp();
}

// Eat 5 times
for (let i = 1; i <= 5; i++){
    timmy.eat();
}

// exercise 5 times
for (let i = 1; i <= 5; i++){
    timmy.exercise();
}

// Age Timmy 9 years
for (let i = 1; i <= 9; i++){
    timmy.ageUp();
}

// Create a hamster named gus
const gus = new Hamster();
gus.name = 'Gus';

// set gus's owner to the string 'Timmy'
gus.owner = 'Timmy';

// Have Timmy buy gus
timmy.buyHamster(gus);

// Age timmy 15 years
for (let i = 1; i <= 15; i++){
    timmy.ageUp();
}

// Eat 2 times
for (let i = 1; i <= 2; i++){
    timmy.eat();
}

// exercise 2 times
for (let i = 1; i <= 2; i++){
    timmy.exercise();
}

console.log(timmy)
console.log(gus)


// CHEF MAKE DINNERS
class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    static createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
}

const dinner1 = Chef.createDinner("Salad", "Steak", "Cake");
const dinner2 = Chef.createDinner("Soup", "Chicken", "Ice Cream");
const dinner3 = Chef.createDinner("Bruschetta", "Pasta", "Apple Pie");

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);
