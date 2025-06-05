function addition3Numbers(number1,number2,number3){
    let somme = (number1+number2+number3)
    return(`Le resultat de la somme est ${somme}.`);
}
console.log(addition3Numbers(1,2,3));
//__________________________________________________________________________


function addition3NumbersWithArg(number1,number2,number3) {
    let somme = (number1+number2+number3)
    return(`Le resultat de la somme est ${somme}.`);
}
 
let a = 1; let b = 2; let c = 3;
let d = 4; let e = 5; let f = 6;
let g = 7; let h = 8; let i = 9;

console.log(addition3NumbersWithArg(a,b,c));
console.log(addition3NumbersWithArg(d,e,f));
console.log(addition3NumbersWithArg(g,h,i));
