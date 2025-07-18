import imdbRefs from "./annexe.js";

const div = document.querySelector("#div");
const lordOfRefList = imdbRefs[0].films; //tab films lord of the ring ds annexe

function lordOfRef(indice) {
  const movieRef = Object.values(lordOfRefList);
  const movieKey = Object.keys(lordOfRefList);
  console.log(movieKey[indice])// affiche la clé du film
  return movieRef[indice];// retourne la ref (imdb) du film
}

function buildUrl(ref) {
  return `https://www.omdbapi.com/?apikey=${API_KEY}&i=${ref}`;
}

async function getData(url) {
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
}

function nouvelleBalise(type, texte, id) {
  let element = document.createElement(`${type}`);
  element.innerText = texte;
  return id.appendChild(element);
}

let movieInfoList = nouvelleBalise("ul", "Exercice Leila", div);

movieInfoList.id = "liste";

console.log(movieInfoList)

let ref = lordOfRef(0);
const API_KEY = "738ca52d";
let URL = buildUrl(ref);
console.log(URL);

 
 const total = Object.keys(lordOfRefList).length

for (let i = 0; i < total ; i++) {
  ref = lordOfRef(i);
  URL = buildUrl(ref);
    getData(URL).then((data) => {

    let titre = data.Title;
    let recette = data.BoxOffice;

    nouvelleBalise("li", `${titre} a amené ${recette} de recettes à sa sortie.`, liste);
  })
  
}













