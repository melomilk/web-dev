const fs = require('fs');
const input =   fs.readFileSync(0, 'utf8').trim();

const lines = input.split('\n');
const arr = JSON.parse(lines[0]);
const k = Number(lines[1]);


const n=arr.length;
const r = k % n;

const result = arr.slice(-r).concat(arr.slice(0, -r));
console.log(JSON.stringify(result));