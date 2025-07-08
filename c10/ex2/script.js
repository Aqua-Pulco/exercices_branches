//NEXT : Qd rien ds input

const body = document.getElementById("body");
const form = document.getElementById("form");
const div = document.getElementById("div");
const submit = document.getElementById("button");

const titre = nouvelleBalise("h1", "Can you drive?", body);
body.insertBefore(titre, form);

function canDrive(name, age) {
    if (age < 18) {
        console.log(`${name} can't drive ! 🚨`)
        return `${name} can't drive ! 🚨`
    }
    else if (age > 90 && age < 120){
        console.log(`${name} can drive ... but might not be the best idea 🦼`)
        return `${name} can drive ... but might not be the best idea 🦼👴🧓`
    }
    else if (age > 120){
        console.log(`${name} can drive ...\nbut might be a little dead 👻`)
        return `${name} can drive ...\nbut might be a little dead 👻`
    }
    else {
        console.log(`${name} can drive ! 🏁`)
        return `${name} can drive ! 🏁`
    }
}


function effaceChampInput(id1) {
    return document.getElementById(`${id1}`).value = "";
}

function nouvelleBalise(typeBalise, texte, id) {
    let element = document.createElement(`${typeBalise}`);
    element.innerText = texte;
    return id.appendChild(element);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputNom = document.getElementById("nom").value;
    let inputAge = document.getElementById("age").value;
    while (isNaN(inputAge)) {
        effaceChampInput("nom");
        effaceChampInput("age");
        return;
    }

    let result = canDrive(inputNom, inputAge);
    console.log(result);

    nouvelleBalise("p", result, div);

    console.log(inputNom);
    console.log(inputAge);
    console.log(canDrive(inputNom, inputAge));

    effaceChampInput("nom");
    effaceChampInput("age");

})



// console.log(canDrive("Robert", 68));
// document.getElementById("p2").innerText = canDrive("Jaqueline", 72);
// document.getElementById("p3").innerText = canDrive("Matthis", 12);
// document.getElementById("p4").innerText = canDrive("Anaïs", 16);

