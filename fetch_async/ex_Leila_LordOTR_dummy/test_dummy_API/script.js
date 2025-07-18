//---------------------------------------------------

let fiveFirstRecipes = [];
async function get5Reciepes() {

  const question = await fetch("https://dummyjson.com/recipes");
  const data = await question.json();

  const noms = data.recipes.map(recette => recette.name);

  for (let i = 0; i < 5; i++) {
    fiveFirstRecipes.push(noms[i]);
  }
  return fiveFirstRecipes;
}
get5Reciepes().then((data) => {
  console.log("___________________\n5 premieres recettes :")
  for (const element of data) {
    console.log("-", element);
  }
})

//---------------------------------------------------

let easyRecipies = [];
async function getEasyRecipes(data) {

  const recipes = await fetch("https://dummyjson.com/recipes");
  //console.log(recipes);
  data = await recipes.json();
  const dataElements = Object.keys(data.recipes);

  for (let i = 0; i < dataElements.length; i++) {
    if ((data.recipes[i].difficulty === 'Easy')) {
      easyRecipies.push(data.recipes[i]);
    }
  }
  return easyRecipies;
}


getEasyRecipes().then((data) => {
  console.log("___________________\nEasy Recipies :");
  
  let tab = Object.keys(data);
  for (let i = 0; i < tab.length; i++) {
    console.log(data[i].name)

  }
})

// NEXT = affiche les recettes selon un critere = keys
// 1 affiche recette
// 2 affiche recette correctement
// 3 affiche recette.s selon key
// 4 affiche menu deroulant de keys
// 5 affiche en fonction

//---------------------------------------------------