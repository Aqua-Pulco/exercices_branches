function powerOf2 (number1){
    if (Number.isInteger(number1)){
        return (number1 * number1);
    }
    return (`${number1} is not an integer`);
}

let numbers = [1, 2.2, 6, -2, 42, "a"]
for (i= 0; i<numbers.length; i++){
    console.log(powerOf2(numbers[i]))
}

let a = prompt(`entre un entier`,);
parseInt(a);

let resultat = powerOf2(a);

function mulitplyByTen(x){
    
    return (x *= 10);
}

//alert(`Le resultat est${mulitplyByTen(resultat)}`)
console.log(mulitplyByTen(resultat));


// NOTE A MOI MEME
// console.log
//typof