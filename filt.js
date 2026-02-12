const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const arr = JSON.parse(input);
const result = arr
    .filter (x => x >= 0)
    .map(x => x * 2)
    .reduce((a, b) => a+b, 0);