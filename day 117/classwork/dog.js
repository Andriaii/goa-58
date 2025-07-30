class Animal {
  constructor(weight, color, age) {
    this.weight = weight;
    this.color = color;
    this.age = age;
  }

  eat() {
    console.log("The animal is eating...");
  }

  drink() {
    console.log("The animal is drinking water...");
  }
}


class Dog extends Animal {
  constructor(weight, color, age, breed) {
    super(weight, color, age);
    this.breed = breed;
  }

  walk() {
    console.log("The dog is walking...");
  }

  bark() {
    console.log("Woof! Woof!");
  }
}



const myDog = new Dog(20, "brown", 3, "Labrador");

console.log("Dog info:");
console.log("Weight:", myDog.weight);
console.log("Color:", myDog.color);
console.log("Age:", myDog.age);
console.log("Breed:", myDog.breed);

myDog.eat();    // მემკვიდრეობით მიღებული
myDog.drink();  // მემკვიდრეობით მიღებული
myDog.walk();   // საკუთარი მეთოდი
myDog.bark();   // საკუთარი მეთოდი
