// file: greetEvent.js
const events = require('events');

// ვქმნით EventEmitter ობიექტს
const emitter = new events.EventEmitter();

// ვამატებთ მოვლენა "greet"
emitter.on('greet', (name) => {
  console.log(`Hello ${name}`);
});

// ვიძახებთ/გამოვიწვევთ მოვლენას emit-ის საშუალებით
emitter.emit('greet', 'Andria');
