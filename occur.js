const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const lines = input.split('\n');
const target = Number(lines[0]);
const arr = lines[1].split('').map(Number);

arr.reduce((acc, val) => {
    if (val === target) {
        acc = acc + 1;  
    }
    return acc;
}, 0);

console.log(count);