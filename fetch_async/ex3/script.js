
// let routes = ['recipes', 'image', 'products' ]


// async function getDummyData(route) {
//     const response = await fetch(`https://dummyjson.com/${route}`);
//     if (route === 'image'){
//         const data = await response.blob();
//         return data;
//     }
//     const data = await response.json();
//     return data;
// }
// const recipes = await getDummyData(routes[0])

// console.log(recipes);

const multiply = (a,b) => a*b;
console.log(multiply(10,5));

const divise = (a,b) => a/b;
console.log(divise(10,5));

const addition = (a,b) => a+b;
console.log(addition(10,6));

const soustraction = (a,b) => a-b;
console.log(soustraction(10,6));