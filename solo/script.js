// async function getReciepes() {
    
// const recipes = await fetch("https://dummyjson.com/recipes");
// const data = await recipes.json();

//   const noms = data.recipes.map(recette => recette.name);

//   for (let i = 0; i < 5; i++) {
//     console.log(noms[i]);
//   }
// }
// getReciepes();


async function getEasyRecipes() {
    const recipes = await fetch("https://dummyjson.com/recipes");
    console.log(recipes)
    const data = await recipes.json();
    console.log(data);
    
}

getEasyRecipes()