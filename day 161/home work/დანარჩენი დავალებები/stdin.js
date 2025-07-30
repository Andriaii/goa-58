process.stdout.write('Enter your password: ');

process.stdin.on('data', (data) => {
  const password = data.toString().trim();
  console.log('Your password is: ' + 'x'.repeat(password.length));
  process.exit();
});
