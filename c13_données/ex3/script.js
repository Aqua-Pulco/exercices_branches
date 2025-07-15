const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);
// write your code bellow


console.log(typeof data)
console.log(data[0])
console.log(data.length)

for (const element of data) {
    if (element.ranking === 4) {
        console.log(element);;
    }
}


let ages = 0;

for (const element of data) {
    ages = ages + parseInt(element.age);
}
const ageMyen = ages / data.length;
console.log(ageMyen);

