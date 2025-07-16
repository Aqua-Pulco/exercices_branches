
const div = document.getElementById("div");


function nouvelleBalise(type, texte, id) {
    let element = document.createElement(`${type}`);
    element.innerText = texte;
    return id.appendChild(element);
}

let titre = nouvelleBalise("h1", "chargement...", div); // affiche chargement... 
titre.id = "titre"; //id pour modifier titre ultérieurement
console.log(titre)

async function firstFetch() {
    const promise = await fetch('https://www.codepassport.dev/api/offers');
    const data = await promise.json()

    titre.innerText = ""; // on modifie le texte titre

    nouvelleBalise("b", data[0].titre, titre); // on "remplace"
    nouvelleBalise("p", data[0].description, div);
    console.log(promise);

}


firstFetch()




// si une fonction est asynchrone elle retourne une promesse alors si pon veut recup une donnée on doit : AWAIT

