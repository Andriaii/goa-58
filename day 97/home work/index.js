//1)

// function sortByAge(arr, callback) {
//     return arr.sort(callback);
//   }




//2)

// function applyToEach(arr, callback) {
//     return arr.map(callback);
//   }
  
  



//3)

// function filterAdults(arr, callback) {
//     return arr.filter(callback);
//   }
  



//4)

// function sumAges(arr, callback, initialValue) {
//     return arr.reduce(callback, initialValue);
//   }




//5)

// function findOldest(arr, callback) {
//     return arr.reduce(callback);
//   }




//6)


// function logNames(arr, callback) {
//     arr.forEach(callback);
//   }
  
  


//7)

// function formatPeople(arr, callback) {
//     return arr.map(callback);
//   }
  
  


//8)

// function findYoungest(arr, callback) {
//     return arr.reduce(callback);
//   }
 




//9)

// function areAllAdults(arr, callback) {
//     return arr.every(callback);
//   }
  



//10)

// function findMinor(arr, callback) {
//     return arr.find(callback);
//   }
  



//11)

// function myMap(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i], i, arr));
//     }
//     return result;
//   }
  



//12)

// function myFilter(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
  


//13)

// function myReduce(arr, callback, initialValue) {
//     let accumulator = initialValue;
//     for (let i = 0; i < arr.length; i++) {
//       accumulator = callback(accumulator, arr[i], i, arr);
//     }
//     return accumulator;
//   }
  



//14)

// function myForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i, arr);
//     }
//   }
  



//15)

// function myFind(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//         return arr[i];
//       }
//     }
//     return undefined;
//   }
  