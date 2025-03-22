//1)
const findEvenNumbers = (num) => {
    const evenNumbers = [];
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  };






//2)
const sumEvenIndexNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  };

  



//3)
const findLongestString = (arr) => {
    let longestString = '';
    for (let str of arr) {
      if (str.length > longestString.length) {
        longestString = str;
      }
    }
    return longestString;
  };

  



  for (let i = 5; i >= 0; i--) {
    console.log(i);
}
