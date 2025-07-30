// // ვა - import - ებთ events მოდულს
// const events = require('events');

// // EventEmitter არის კლასი, რომელიც საშუალებას გვაძლევს შევქმნათ და ვმართოთ მოვლენები (events)
// // შეგვიძლია "დავუსაბსქრაიბდეთ" კონკრეტულ მოვლენებზე და მათ მოხდენაზე რეაგირება მოვახდინოთ

// // ვქმნით EventEmitter-ის ობიექტს
// const myEvents = new events.EventEmitter();

// // on() — გამოიყენება იმისთვის, რომ მოვუსმინოთ მოვლენას (listener დავუმატოთ)
// // emit() — გამოიყენება მოვლენისთვის გამოსაძახებლად ანუ აქტივაციისთვის

// // ვუსმენთ click მოვლენას
// myEvents.on('click', () => {
//   console.log('Click event fired!');
// });

// // ვუსმენთ submit მოვლენას
// myEvents.on('submit', () => {
//   console.log('Submit event fired!');
// });

// // მოვლენის გამოძახება emit მეთოდით
// myEvents.emit('click');
// myEvents.emit('submit');





// const events = require('events');
// const myEvents = new events.EventEmitter();

// // on() იღებს callback ფუნქციას, რომელიც იღებს არგუმენტებს emit-დან
// myEvents.on('login', (username, age) => {
//   console.log(`User ${username} is ${age} years old`);
// });

// // emit() გადასცემს შესაბამის არგუმენტებს
// myEvents.emit('login', 'andria', 23);





const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sum = 0;

console.log('Enter numbers. Type "exit" to finish:');

rl.on('line', (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    console.log('Total sum is:', sum);
    rl.close(); // პროგრამის დასრულება
  } else {
    const num = parseFloat(input);
    if (!isNaN(num)) {
      sum += num;
    } else {
      console.log('Please enter a valid number or type "exit"');
    }
  }
});
