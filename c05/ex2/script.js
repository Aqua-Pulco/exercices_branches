const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];


let horoscopeElement = document.getElementById("horoscope");
console.log(horoscopeElement);



for (const item of horoscope) { //Parcours chaque élément du horoscope, et à chaque tour, mets-le dans une variable temporaire que j'appelle item.
   const paragraphe =document.createElement("p");
   const titre2 =document.createElement("h2");
   titre2.innerText = item.sign;
   horoscopeElement.appendChild(titre2);
   paragraphe.innerText = item.description;
   horoscopeElement.appendChild(paragraphe);
   console.log(item.sign);
   console.log(item.description);
}

// for (let i = 0; i<horoscope.length;i++){  
//     const paragraphe =document.createElement("p");
//     const titre2 =document.createElement("h2");
//     titre2.innerText = horoscope[i].sign;
//     horoscopeElement.appendChild(titre2);
//     paragraphe.innerText = horoscope[i].description;
//     horoscopeElement.appendChild(paragraphe);
//  }