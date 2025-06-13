function powerOf2(number1){ // créé la fonction powerOf2 qui prend en parametre un nombre
    if (Number.isInteger(number1)){ //si le nombre entré en parametre est entier 'isInteger'
        let resultat = number1 **2 // **2 = number*number
        return (resultat); // renvoie son carré
    }
    return (`${number1} is not an integer`); //autrement renvoie ton entrée n'est pas un entier
}

// let numbers = [1, 2.2, 6, -2, 42, "a"]
// for (i= 0; i<numbers.length; i++){
//     console.log(powerOf2(numbers[i]))
// } //test de la fonction

//let square = powerOf2(3); //Stocke resultat de powerOf2 ds variable
//console.log(square); //check = 9

function multiplyByTen(x){ // crée la fonction multiplyByten avec un parametre
    return (x *= 10);      // la fonction renvoie le parametre * 10
}
//console.log(mulitplyByTen(square)); //check = 90


let entry = prompt("Veuillez renseigner un nombre entier svp");
entry = parseInt(entry);
let resultat = powerOf2(entry);
//console.log(resultat);
let finalResult = multiplyByTen(resultat);
//console.log(finalResult);

document.querySelector('h1').innerText = resultat;
document.querySelector('h2').innerText = finalResult;

