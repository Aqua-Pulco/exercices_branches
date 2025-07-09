// Nous souhaitons créer un décompte.

//     Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
//     Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).

// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.


const div = document.getElementById("div1");

let userChoice;


function nouvelleBalise(typeBalise, texte, id) {
    let element = document.createElement(`${typeBalise}`);
    element.innerText = texte;
    return id.appendChild(element);
}

do {
    userChoice = prompt("entre un N-O-M-B-R-E",);
}
while (isNaN(userChoice)
|| userChoice === ""
|| userChoice > 10
|| userChoice < 0
);

userChoice = parseInt(userChoice);

while (userChoice > 0) {
    console.log(userChoice);
    const p = nouvelleBalise("a", `${userChoice}, `, div);
    userChoice--;
}

if (userChoice === 0) {
    console.log(userChoice);
    const p = nouvelleBalise("a", `${userChoice}.`, div);

}

