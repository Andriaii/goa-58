process.stdout.write('Enter a letter: ');

process.stdin.on('data', (data) => {
  const letter = data.toString().trim().toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(letter)) {
    console.log(`${letter} is vowel`);
  } else {
    console.log(`${letter} is consonant`);
  }

  process.exit();
});
