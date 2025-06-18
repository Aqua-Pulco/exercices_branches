// Sélectionne la div #container
// Crée un élément HTML (par exemple un <h2>)
// Ajoute du texte à cet élément (innerText)
// Ajoute l’élément à la div avec appendChild

const intoTheDiv = document.getElementById("container");

let titre = document.createElement("h2");
let paragraphe = document.createElement("p");
let txt = document.createElement("a");

titre.innerText = "j'ai jamais tué de chat";
paragraphe.innerText = "C'est pas ma faute à moi, moi Lolita ..."
txt.innerText = "... L.O.L.I.T.A"
intoTheDiv.appendChild(titre);
intoTheDiv.appendChild(paragraphe);
intoTheDiv.appendChild(txt);

