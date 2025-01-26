console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
