const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const obj = JSON.parse(input);

console.log(obj.name);