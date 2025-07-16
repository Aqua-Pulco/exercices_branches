
// 
// objectif : 
// <h2>Traducteur·ice en Chef d'Émojis</h2>
/* <p>Parlez-vous couramment le langage des émojis ? Nous recrutons une personne en tant que Traducteur en Chef d'Émojis pour combler le fossé de communication entre les développeurs et les personnes concernées, qu'elles soient techniques ou non. La personne doit avoir un talent pour traduire un code complexe en émojis expressifs et vice versa. Des points bonus si la personne peut décoder les messages secrets cachés dans les 💻🤔🚀.</p> */

// avoir une partie qui gere l'affichage l'autre qui gere je ne sais plus quoi

//https://api.allorigins.win/raw?url= 🙏ou juste ecrire https:// www. lasuite

const div = document.getElementById("div");

function nouvelleBalise(type, texte, id) {
    let element = document.createElement(`${type}`);
    element.innerText = texte;
    return id.appendChild(element);
}

async function firstFetch() {
    const promise = await fetch('https://www.codepassport.dev/api/offers');
    const data = await promise.json()

    nouvelleBalise("b", data[0].titre, div); 
    nouvelleBalise("p", data[0].description, div);
    console.log(promise);
    
}

firstFetch();

// si une fonction est asynchrone elle retourne une promesse alors si pon veut recup la donne : AWAIT

