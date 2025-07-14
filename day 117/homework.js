class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  think() {
    console.log(`${this.name} is thinking`);
  }
}

class Student extends Person {
  constructor(name, surname, gradeLevel) {
    super(name, surname);
    this.gradeLevel = gradeLevel;
  }

  study(subject) {
    console.log(`${this.name} is studying ${subject} and their grade is ${this.gradeLevel}`);
  }
}

const student1 = new Student("Andria", "Maglaferidze", 95);
student1.think();
student1.study("Mathematics");


class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.energyLevel = 100;
  }

  run() {
    this.energyLevel -= 10;
    console.log(`Dog named ${this.name} is now running which means that it has lost 10 energy and it's energy level now is ${this.energyLevel}`);
  }

  rest() {
    this.energyLevel += 5;
    console.log(`Dog named ${this.name} is now resting which means that it's energy level is now ${this.energyLevel}`);
  }

  showStatus() {
    console.log(`Dog's name: ${this.name}, age: ${this.age}, current energy level: ${this.energyLevel}`);
  }
}

const dog1 = new Dog("Rex", 3);
dog1.run();
dog1.rest();
dog1.showStatus();
