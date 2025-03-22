const targetNumber = 111;

while (true) {
    
    let userInput = parseInt(prompt("Enter a number:"));
    
    
    if (userInput === targetNumber) {
        console.log("Correct answer!");
        break; 
    } else {
        console.log("Incorrect, try again.");
    }
}
