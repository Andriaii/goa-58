const fs = require('fs');

fs.readFile('wrongFile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('File path incorrect');
  } else {
    console.log(data);
  }
});
