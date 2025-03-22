function manualFilter(numbers, checkFunction) {
    
    let filteredArr = [];

    
    for (let num of numbers) {
        
        if (checkFunction(num)) {
            filteredArr.push(num);
        }
    }

    
    return filteredArr;
}


function isEven(num) {
    return num % 2 === 0;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = manualFilter(numbers, isEven);
console.log(filteredNumbers);










function manualMap(arr, changer) {
    let changedArr = [];
    for (let i = 0; i < arr.length; i++) {
      changedArr.push(changer(arr[i]));
    }
    return changedArr;
  }
  
  
  function changer(num) {
    return num * 2;
  }
  
  
  const originalArr = [1, 2, 3, 4];
  const result = manualMap(originalArr, changer);
  console.log(result); 
  
