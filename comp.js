const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();

const countVowels = (text) => {

    let count = 0;
    const lowerText = text.toLowerCase();

    for (let i = 0; i < lowerText.length; i++) {
        const ch = lowerText[i];
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u' 
        ){
            count = count + 1;
        }
    }
    return count;
};

const result = countVowels(input);
console.long(result);