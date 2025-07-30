function copyObj(target, source) {
  for (let key in source) {
    target[key] = source[key]; // კოპირება თითოეული თვისებისთვის
  }
  return target;
}

// გამოყენება:
const obj1 = { name: "Nika", age: 25 };
const obj2 = { city: "Tbilisi", country: "Georgia" };

const merged = copyObj(obj1, obj2);
console.log("Merged object:", merged);


// დესტრუქცია merged ობიექტიდან
const { name, age, city, country } = merged;

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Country:", country);



const person = { name: "Ana" };
const details = { age: 30, country: "Georgia" };

const combined = Object.assign({}, person, details); // პირველი არგუმენტი ცარიელი ობიექტია — ახალს ქმნის
console.log("Object.assign result:", combined);


const arr = [10, 20, 30];

// ამოიღებს ელემენტებს შესაბამისად
const [first, second, third] = arr;

console.log("First:", first);   // 10
console.log("Second:", second); // 20
console.log("Third:", third);   // 30
