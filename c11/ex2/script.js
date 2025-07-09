function readMessage(tab) {
    let message = "";
    for (let i = 0; i < tab.length; i++) {
        message = message + tab[i];
    }
    return message
}

let letters = ['A', 'd', 'a', '-', 'T', 'e', 'c', 'h']
console.log(readMessage(letters));

console.log(' ')

letters = ['A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
console.log(readMessage(letters));
