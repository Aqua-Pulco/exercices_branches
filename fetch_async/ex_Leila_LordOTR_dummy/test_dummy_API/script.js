const div = document.querySelector("#div");
const div2 = document.querySelector("#div2");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let recettes = [];
let indexRecette = 0;


function getLocalHash(){
  const hashBrut = location.hash;
  console.log(hashBrut)
  if(!hashBrut) return
  const HASH = hashBrut.slice(1);
  if(isNaN(HASH)) return
  const hashOk = parseInt(HASH, 10);
  console.log("hash ok:", hashOk)
  return hashOk 
}


function nouvelleBalise(type, texte, id) {
  let el = document.createElement(`${type}`);
  el.innerText = texte;
  return id.appendChild(el);
}

// fonction pour la suite "Ingredients" en particulier
function toLowerTabText(tab) {
  let tab2 = []
  for (let i = 0; i < tab.length; i++) {
    if (i > 0) {
      const el = tab[i].toLowerCase()
      tab2.push(el)
    } else { tab2.push(tab[i]) }
  }
  let finalText = tab2.join(", ");
  return finalText
}

async function getAllRecipes() {
  const reponse = await fetch("https://dummyjson.com/recipes");
  const data = await reponse.json();
  return data;
}

function showOneRecipe(indice, data) {
  div.innerHTML = ""; //efface l'affichage précedent de div
  
  const recette = data.recipes[indice];
  const clef = Object.keys(recette);//tab des 16 clefs
  const content = Object.values(recette);//tab des 16 valeurs
  let h1; // pour name.id, pour img en dessous
 

  for (let i = 0; i < clef.length; i++) {//pour chaque clefs d1recette
    let key = clef[i];
    let contenu = content[i];
    //CONTITIONS affichage html PAS JOLI 👀
    if (key === "name") {
      h1 = nouvelleBalise("h1", `${contenu}\n\n`, div);
      h1.id = "h1";
      //console.log(h1);
    }
    else if (key === "ingredients") {
      let textIngr = toLowerTabText(contenu);
      nouvelleBalise("b", `${key} : `, div);
      nouvelleBalise("a", `${textIngr}.\n\n`, div);
    }
    else if (key === "instructions") {
      let textInstr = contenu.join(" ");
      nouvelleBalise("b", `${key} :`, div);
      nouvelleBalise("p", textInstr, div);
    }
    else if (key === "image") {
      const balise = nouvelleBalise("img", contenu, h1);
      balise.src = contenu;
      balise.className = "imgRecipe";
    }
    else if (key === "id" || key === "tags" || key === "reviewCount" || key === "userId") {
    }
    else {
      nouvelleBalise("b", `${key} : `, div);
      nouvelleBalise("a", `${contenu}.\n\n`, div);
    }
  }
}

getAllRecipes().then((data) => {
  const nMax = data.recipes.length - 1;
  const nMin = 0;
  showOneRecipe(indexRecette, data);

  next.addEventListener("click", () => { //next clic
    indexRecette++;
    location.hash = indexRecette;
    if (indexRecette > nMax) { //
      indexRecette = nMax;
       location.hash = indexRecette;
    }
    console.log(getLocalHash());
    showOneRecipe(indexRecette, data);
  })

  prev.addEventListener("click", () => { //prev clic
    indexRecette--;
    location.hash = indexRecette;
    if (indexRecette < nMin) {
      indexRecette = nMin;
       location.hash = indexRecette;
    }
    console.log(getLocalHash());
    showOneRecipe(indexRecette, data);

  })
})






// const objet = tableau.find( (element) => conditionVraieOuFausse );
// const users = [{id:1},{id:5},{id:9}];
// const u = users.find(u => u.id === 5);   // -> { id:5 }

// Tu veux l’OBJET lui‑même	find
// Tu veux juste sa POSITION (index)	findIndex

// const position = tableau.findIndex( (element) => conditionVraieOuFausse );
// const users = [{id:1},{id:5},{id:9}];
// const pos = users.findIndex(u => u.id === 5);   // -> 1

// 7. Checklist pour toi

// Quand tu voudras brancher ça :

//     Tu récupères hashOk (tu le fais déjà).

//     Tu fais const pos = data.recipes.findIndex(r => r.id === hashOk);

//     Si pos !== -1 → indexRecette = pos;

//     Puis showOneRecipe(indexRecette, data);