//---------------------------------------------------

let fiveFirstRecipes = [];
async function get5Reciepes() {

  const question = await fetch("https://dummyjson.com/recipes");
  const data = await question.json();

  const noms = data.recipes.map(recette => recette.name);

  for (let i = 0; i < 5; i++) {
    fiveFirstRecipes.push(noms[i]);
  }
  return fiveFirstRecipes
}
get5Reciepes().then((data) => {
  console.log("5 premieres recettes :")
  for (const element of data) {
    console.log("-", element);
  }
})

//---------------------------------------------------

let easyRecipies = [];
async function getEasyRecipes(data) {

  const recipes = await fetch("https://dummyjson.com/recipes");
  console.log(recipes);
  data = await recipes.json();
  const dataElements = Object.keys(data.recipes);

  for (let i = 0; i < dataElements.length; i++) {
    if ((data.recipes[i].difficulty === 'Easy')) {
      easyRecipies.push(data.recipes[i]);
    }
    return easyRecipies;
  }
}

// NEXT = affiche les recettes selon un critere = keys
// 1 affiche recettes
// 2 affiche recettes correctement
// 3 affiche recette selon key
// 4 affiche menu deroulant de keys
// 5 affiche en fonction


getEasyRecipes();

//---------------------------------------------------