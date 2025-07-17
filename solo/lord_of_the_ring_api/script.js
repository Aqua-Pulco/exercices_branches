import imdbRefs from "./annexe.js";

const lordOfTheRingMovieRef = imdbRefs[0].films;
// const div = document.querySelector("#div");
const ref = findMovieRef(1);
const API_KEY = "738ca52d";
let URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${ref}`
console.log(URL);

function findMovieRef(indice) {
  const movieRef = Object.values(lordOfTheRingMovieRef);
  const movieKey =Object.keys(lordOfTheRingMovieRef);
  console.log(movieKey[indice])
  return movieRef[indice];
}

async function getData() {
  const reponse = await fetch(URL);
  const data = await reponse.json();
  return data;
}

console.log(getData())







// function nouvelleBalise(type, texte, id) {
//   let element = document.createElement(`${type}`);
//   element.innerText = texte;
//   return id.appendChild(element);
// }

// nouvelleBalise("ul", "teeeext", div);

