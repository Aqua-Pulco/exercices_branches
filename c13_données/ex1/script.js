import candidates from './annexe.js';
let liste = document.getElementById("lo1");

function nouvelleBalise(type, texte, id){
        let element = document.createElement(`${type}`);
        element.innerText = texte;
        return id.appendChild(element);
}

let i = 0;
for (const element of candidates) {
    console.log(i, element);
    nouvelleBalise("li", element, liste)
    i++;
}

console.log(candidates[0]);
console.log(candidates[7]);

