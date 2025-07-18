const div = document.querySelector("#div");

// //---------------------------------------------------

// let fiveFirstRecipes = [];
// async function get5Reciepes() {

//   const question = await fetch("https://dummyjson.com/recipes");
//   const data = await question.json();

//   const noms = data.recipes.map(recette => recette.name);

//   for (let i = 0; i < 5; i++) {
//     fiveFirstRecipes.push(noms[i]);
//   }
//   return fiveFirstRecipes;
// }
// get5Reciepes().then((data) => {
//   console.log("___________________\n5 premieres recettes :")
//   for (const element of data) {
//     console.log("-", element);
//   }
// })

// //---------------------------------------------------

// let easyRecipies = [];
// async function getEasyRecipes(data) {

//   const recipes = await fetch("https://dummyjson.com/recipes");
//   //console.log(recipes);
//   data = await recipes.json();
//   const dataElements = Object.keys(data.recipes);

//   for (let i = 0; i < dataElements.length; i++) {
//     if ((data.recipes[i].difficulty === 'Easy')) {
//       easyRecipies.push(data.recipes[i]);
//     }
//   }
//   return easyRecipies;
// }


// getEasyRecipes().then((data) => {
//   console.log("___________________\nEasy Recipies :");
  
//   let tab = Object.keys(data);
//   for (let i = 0; i < tab.length; i++) {
//     console.log(data[i].name)
//   }
  
// })

// NEXT = affiche les recettes selon un critere = keys
// 1 affiche recette
// 2 affiche recette correctement
// 3 affiche recette.s selon key
// 4 affiche menu deroulant de keys
// 5 affiche en fonction

//---------------------------------------------------

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


getAllRecipes().then((data) => {
  const recepiesNumber = Object.keys(data.recipes);
  const recipieKeysNumber = (Object.keys(data.recipes[0]));

  for (let i = 0; i < recipieKeysNumber.length; i++) { 
    let clef = Object.keys(data.recipes[i])
    let content = Object.values(data.recipes[i])
    let clé = clef[i];
    let contenu = content[i];
    nouvelleBalise("p", `${clef[i]} : ${content[i]}`, div);
    }

  })

RENDU : 

// id : 1

// name : Vegetarian Stir-Fry

// ingredients : All-purpose flour,Butter, softened,Brown sugar,White sugar,Eggs,Vanilla extract,Baking soda,Salt,Chocolate chips

// instructions : Cook fettuccine pasta according to package instructions.,In a pan, sauté sliced chicken in butter until fully cooked.,Add minced garlic and cook until fragrant.,Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.,Season with salt and pepper to taste.,Combine the Alfredo sauce with cooked pasta.,Garnish with fresh parsley before serving.

// prepTimeMinutes : 15

// cookTimeMinutes : 15

// servings : 6

// difficulty : Medium

// cuisine : Italian

// caloriesPerServing : 400

// tags : Biryani,Chicken,Main course,Indian,Pakistani,Asian

// userId : 49

// image : https://cdn.dummyjson.com/recipe-images/13.webp

// rating : 4.7

// reviewCount : 86

// mealType : Dinner
