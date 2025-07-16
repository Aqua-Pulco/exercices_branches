Module 1 - Les bases :

1. Cours

    Variable = « boîte » dans laquelle on stocke une valeur.

    On déclare avec let ou const (jamais var aujourd’hui).

    Types primitifs :

        number (ex. 42, 3.14)

        string (ex. "bonjour", 'a')

        boolean (true ou false)

        null (rien)

        undefined (non défini)

2. Syntaxe

let age = 25;                // nombre
const nom = "Alice";         // chaîne de caractères
let actif = true;            // booléen
let rien = null;             // valeur intentionnellement vide
let inconnu;                  // indéfini → undefined

const = valeur fixe, on ne peut pas réassigner.
let = valeur qu’on peut changer.

3. exemples
let compteur = 0;
compteur = compteur + 1;     // compteur vaut 1

const message = "Salut";
// message = "Hello";       // ERREUR : constante

let estConnecte = false;
if (!estConnecte) {
  console.log("Merci de vous connecter.");  
}


Module 2 – Objets littéraux et propriétés
1. Cours

    Un objet littéral en JavaScript, c’est une collection de paires clé : valeur.

    On utilise les accolades {} pour le créer.

    Chaque clé (aussi appelée propriété) est un string (sans guillemets si c’est un identifiant valide), et chaque valeur peut être n’importe quel type : nombre, chaîne, booléen, autre objet, tableau, fonction, etc.

// Exemple d’objet littéral
const personne = {
  nom: "Alice",        // propriété "nom" = valeur "Alice"
  age: 30,             // propriété "age" = valeur 30
  actif: true,         // propriété "actif" = valeur true
  passions: ["code", "musique"],  // un tableau comme valeur
};

Accéder aux propriétés

    Notation par point

console.log(personne.nom);     // "Alice"
console.log(personne.age);     // 30

Notation par crochets (utile si la clé est dynamique ou invalide comme identifiant)

    console.log(personne["actif"]);  // true

    const cle = "passions";
    console.log(personne[cle]);      // ["code", "musique"]

ChatGPT a dit :

Règle claire pour les clés d’un objet littéral JavaScript

    Sans guillemets : si la clé est un identifiant valide :

        Commence par une lettre a–z ou A–Z, un underscore _ ou un dollar $.

        Ne contient que des lettres, chiffres, underscores ou dollars.

        Exemples valides (pas de guillemets nécessaires) :

    const obj = {
      nom: "Alice",
      age: 30,
      _id: 123,
      $prix: 19.99,
      compteur1: 0
    };

Avec guillemets : dans tous les autres cas :

    Clé contenant un espace, un tiret (-), un point (.) ou tout autre caractère non autorisé dans un identifiant.

    Clé qui commence par un chiffre.

    Clé qui utilise des signes diacritiques, symboles…

    Exemples :

        const obj = {
          "nom complet": "Alice Dupont",   // espace
          "date-sortie": 2010,             // tiret
          "user.name": "alice",            // point
          "123nombre": "oui",              // commence par chiffre
          "ça va?": true                   // caractères spéciaux
        };

Accès aux propriétés

    Notation pointée (obj.clé) : uniquement pour les identifiants valides (sans guillemets).

    Notation entre crochets (obj["clé"]) : toujours possible, et nécessaire si la clé contient des caractères spéciaux ou n’est pas un identifiant valide.

const film = {
  titre: "Inception",
  "date-sortie": 2010
};

console.log(film.titre);            // OK → "Inception"
console.log(film["titre"]);         // OK → "Inception"

console.log(film["date-sortie"]);   // OK → 2010
// film.date-sortie est interprété comme film.date – sortie → erreur ou NaN

Modifier ou ajouter une propriété

personne.age = 31;               // modifie la propriété existante
personne.pays = "France";        // ajoute une nouvelle propriété

Supprimer une propriété

delete personne.actif;           // retire la clé "actif" et sa valeur

2. Exemple commenté

// Création d'un objet 'livre'
const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  pages: 96,
};

// Accès et affichage
console.log(livre.titre);   // "Le Petit Prince"
console.log(livre.auteur);  // "Antoine de Saint-Exupéry"

// Ajout d'une propriété
livre.annee = 1943;
console.log(livre.annee);   // 1943

// Suppression d'une propriété
delete livre.pages;
console.log(livre.pages);   // undefined

Module 3 – Fonctions en JavaScript
A. Qu’est‑ce qu’une fonction ?

    Une fonction est un bloc de code que tu peux appeler plusieurs fois.

    Elle peut recevoir des paramètres (des valeurs en entrée) et peut retourner (renvoyer) une valeur.

B. Syntaxe 1 : Déclaration de fonction

// 1. Mot‑clé `function`
// 2. Nom de la fonction
// 3. Parenthèses avec paramètres séparés par des virgules
// 4. Accolades { } contenant le code à exécuter
function multiplier(a, b) {
  const resultat = a * b;
  return resultat;   // renvoie la valeur à l’appelant
}

    Appel de la fonction :

    const produit = multiplier(5, 6);
    console.log(produit);  // affiche 30

C. Syntaxe 2 : Expression de fonction

    On crée une fonction anonyme (sans nom) et on l’assigne à une variable.

const diviser = function(a, b) {
  const resultat = a / b;
  return resultat;
};

    Appel :

    const quotient = diviser(10, 2);
    console.log(quotient);  // affiche 5

D. Syntaxe 3 : Fonction fléchée (arrow function)

    Version plus concise de l’expression de fonction.

    On remplace le mot‑clé function par =>.

// Version complète avec accolades et `return`
const ajouter = (a, b) => {
  const somme = a + b;
  return somme;
};

// Si la fonction ne fait qu'une seule ligne qui renvoie une valeur,
// on peut écrire directement :
const soustraire = (a, b) => a - b;

    Appels :

console.log(ajouter(3, 7));    // affiche 10
console.log(soustraire(9, 4)); // affiche 5