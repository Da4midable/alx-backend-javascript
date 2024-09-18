// 1-stdin.js

const question = 'Welcome to Holberton School, what is your name?\n';

function askName() {
    process.stdout.write(question);
}

process.stdin.on('data', function(data) {
    const answer = data.toString().trim();
    process.stdout.write(`Your name is: ${answer}\n`);
    process.exit();
});

process.on('exit', function() {
    if (!process.stdin.isTTY) {
        process.stdout.write('This important software is now closing\n');
    }
});

askName();
