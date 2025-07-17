
let routes = ['recipes', 'image', 'products' ]


async function getDummyData(route) {
    const response = await fetch(`https://dummyjson.com/${route}`);
    if (route === 'image'){
        const data = await response.blob();
        return data;
    }
    const data = await response.json();
    return data;
}
const data = await getDummyData(routes[0])

//console.log(recipes.recipes);
console.log("total", data.total); //nbr total de recettes
console.log("skip", data.skip); // nbr de recettes ignorées ! c'est possible apparemment
console.log("limit", data.limit); //30 > il m'en manque 20 > pour les obtenir : const resAll = await fetch('https://dummyjson.com/recipes?limit=50');
console.log("Clés au niveau racine :", Object.keys(data)); // choppe les clefs
console.log("clés pour la 1ere recette", Object.keys(data.recipes[0]));


const recettes = [];


//tous les ingrédients de toutes les recettes
for (const recette in data.recipes) {
    console.log(data.recipes[recette].ingredients);
}


// les 2 premieres recettes 
     

