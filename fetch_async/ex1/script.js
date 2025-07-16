
// objectif : 
// <h2>Traducteur·ice en Chef d'Émojis</h2>
/* <p>Parlez-vous couramment le langage des émojis ? Nous recrutons une personne en tant que Traducteur en Chef d'Émojis pour combler le fossé de communication entre les développeurs et les personnes concernées, qu'elles soient techniques ou non. La personne doit avoir un talent pour traduire un code complexe en émojis expressifs et vice versa. Des points bonus si la personne peut décoder les messages secrets cachés dans les 💻🤔🚀.</p> */


//https://api.allorigins.win/raw?url= 🙏

const div = document.getElementById("div");

function nouvelleBalise(type, texte, id) {
    let element = document.createElement(`${type}`);
    element.innerText = texte;
    return id.appendChild(element);
}

async function firstFetch() {
    const promise = await fetch('https://api.allorigins.win/raw?url=https://codepassport.dev/api/offers');
    const data = await promise.json()

    nouvelleBalise("h", data[0].titre, div); 
    nouvelleBalise("p", data[0].description, div);
    console.log(data.titre);
}

firstFetch();



