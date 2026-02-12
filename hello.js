const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const arr = JSON.parse(input);
const uniqueSet = new Set(arr);
const result = Array.from(uniqueSet);

console.log(JSON.stringify(input));