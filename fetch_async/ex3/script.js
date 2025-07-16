
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
const recipes = await getDummyData(routes[0])

//console.log(recipes.recipes);
console.log("total", recipes.total); //nbr total de recettes
console.log("skip", recipes.skip); // nbr de recettes ignorées ! c'est possible apparemment
console.log("limit", recipes.limit);
console.log("Clés au niveau racine :", Object.keys(recipes)); // choppe les clefs
console.log("clés pour la 1ere recette", Object.keys(recipes.recipes[0]));