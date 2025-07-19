const div = document.querySelector("#div");
const div2 = document.querySelector("#div2");

let recettes = [];
let indexRecette = 0;

function nouvelleBalise(type, texte, id) {
  let el = document.createElement(`${type}`);
  el.innerText = texte;
  return id.appendChild(el);
}


// nouvelleBalise("p",data[0].name, div );

async function getAllRecipes() {
  const reponse = await fetch("https://dummyjson.com/recipes");
  const data = await reponse.json();
  return data;
}

function showOneRecipe(indice, data) {
  div.innerHTML = ""; //rafraichit la page précedente
 
  const recette = data.recipes[indice];
  const clef = Object.keys(recette);//tab des 16 clefs
  const content = Object.values(recette);//tab des 16 valeurs
 
  for (let i = 0; i < clef.length; i++) {//pour chaque recette
    let key = clef[i];
    let contenu = content[i];

    //CONTITIOOOONS PAS JOLI
    if (key === "id") {
      nouvelleBalise("b", ``, div);
    }
    else if (key === "instructions") {
      let text = contenu.join(" ");
      nouvelleBalise("b", `${key} :`, div);
      nouvelleBalise("p", text, div);
    }
    else if (key === "name") {
      let h1 = nouvelleBalise("h1", `${contenu}\n\n`, div);
      h1.id = "h1";
      console.log(h1)
    }
    else if (key === "image") {
      const tab = Object.values(contenu);
      const text = tab.join(""); console.log(text);
      const balise = nouvelleBalise("img", text, h1);
      balise.src = text;
      balise.className = "img";
    }
    else if (key === "tags" || key === "reviewCount" || key === "userId") {
    }
    else {
      nouvelleBalise("b", `${key} : `, div);
      nouvelleBalise("a", `${contenu}\n\n`, div);
    }
  }
}

 getAllRecipes().then((data) => {
  showOneRecipe(indexRecette,data)
})
  

