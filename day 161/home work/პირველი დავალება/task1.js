const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('დაფიქსირდა შეცდომა:', err);
    return;
  }
  console.log(data);
});
