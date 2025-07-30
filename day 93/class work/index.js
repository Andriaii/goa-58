//1)shift-ზე დავალებები
let drinks = ["coffee", "tea", "juice", "soda"];
let firstDrink = drinks.shift();
console.log(firstDrink);
console.log(drinks);

//2)slice-ზე დავალებები
let words = ["hello", "world", "JavaScript", "is", "fun"];
let slicedWords = words.slice(1, 4);
console.log(slicedWords); 

//3)splice-ზე დავალებები
let letters = ["A", "B", "C", "D", "E"];
let removed = letters.splice(2, 2, "X"); 
console.log(letters); 
console.log(removed);


//4)join-ზე დავლებები
let items = ["apple", "banana", "cherry"];
let joinedString = items.join("-");
console.log(joinedString);


//5)indexOf-ზე დავალებები
let colors = ["red", "blue", "green", "blue", "yellow"];
let index = colors.indexOf("blue");
console.log(index);
