function callFunction(callback) {
    console.log("მიძახეს მაღალი ხალხიდან...");
    callback();
}

function sayHello() {
    console.log("გამარჯობა");
}

callFunction(sayHello);







function manualForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers = [10, 20, 30];

manualForEach(numbers, function(element, index) {
    console.log(`ელემენტი #${index}: ${element}`);
});








