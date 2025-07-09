let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']
let letters2 = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']


let message = "";


function readMessage(tab){
for (let i = 0; i < tab.length; i++) {
    const message = tab[i];
    console.log(message)
}
}
readMessage(letters);
console.log(' ')
readMessage(letters2);
