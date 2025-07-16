// Create an Object
const person = 
    {
        "candidate": "Le Filip",
        "age": 29,
        "city": "Paris",
        "region": "Île-de-France"
    }
    
// Build a Text
let text = "";

let ages = 0;

for (let cle in person) { // for in pour un seul objet
  text += cle + " ---- " + person[cle] + " <br />";
};


// Display the Text
document.getElementById("demo").innerHTML = text;