function manualFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i; // დააბრუნე პირველი შესატყვისი ელემენტის ინდექსი
    }
  }
  return -1; // თუ ვერ მოიძებნა შესატყვისი
}

// გამოყენება:
const numbers = [10, 20, 30, 40];
const index = manualFindIndex(numbers, num => num > 25);
console.log(index); // 2




function manualReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    accumulator = arr[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

// გამოყენება:
const sum = manualReduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0);
console.log(sum); // 10


const names = ["Giorgi", "Nino", "Lasha", "Mariam", "Saba", "Ana", "Dato"];

const evenIndexNames = names.filter((_, index) => index % 2 === 0);
console.log(evenIndexNames); 
// ["Giorgi", "Lasha", "Saba", "Dato"]




const numbers2 = [5, 10, 15, 20, 25, 30];

const doubledOddIndex = numbers2.map((num, index) => {
  return index % 2 !== 0 ? num * 2 : num;
});

console.log(doubledOddIndex); 
// [5, 20, 15, 40, 25, 60]
