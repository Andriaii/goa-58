const fs = require('fs');
const filePath = 'text2.txt';

process.stdout.write('Enter a sentence to add to file: ');

process.stdin.on('data', (data) => {
  const sentence = data.toString().trim() + '\n';
  
  fs.appendFile(filePath, sentence, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('Sentence added to text2.txt');
    }
    process.exit();
  });
});
