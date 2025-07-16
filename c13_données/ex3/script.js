const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);
// write your code bellow

//const jsonData = require('./data.json'); // require recupere le contenu
//console.log(jsonData);
console.log(typeof data);
console.log(data[0]);
console.log(data.length);

for (const element of data) {
    if (element.ranking === 4) {
        console.log(element);
    }
}

// autre possible const variable = data.find(data=>data.ranking === 4)
// autre possible const variable = data.filter(item=>item.ranking === 4) // filter retourne un tableau;
// autre possible const variable = data.map a faire

let sommeAges = 0;

for (const element of data) {
    sommeAges += parseInt(element.age);
}

const ageMoyen = sommeAges / data.length;
console.log(ageMoyen);

