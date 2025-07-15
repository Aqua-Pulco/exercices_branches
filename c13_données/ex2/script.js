import {obj, data} from './annexe.js';


function nouvelleBalise(type, texte, id){
        let element = document.createElement(`${type}`);
        element.innerText = texte;
        return id.appendChild(element);
}

//affiche uniquement le nom de la candidate dans obj
console.log(obj.candidate)

let i = 0;
//affiche la liste des candidates dans data
for (const element of data) {
    console.log(`candidate ${i}: ${element.candidate}`);
    i++;
}




