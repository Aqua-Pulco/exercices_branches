//Erreurs de syntaxe ')' et '}' et '[]'
//fonction appelée avant init
//On ne comprends pas ce qu'il s'y passe ou cela commence? ou cela finit ?
// il y a differentes tentatives d'executions je les classe et tente de les corriger
// il y en a une qui rappelle les parametres de la fonction au lieus d'appeler les variables
// une fonction doit retourner une valeur pas un console.log je deplace le console.log hors de la fonction
// pas de parametres dans > "sendMessage()" 
// sendMessage["Super on se voit mardi !", "Linda", "Marc"] pas les bon [] !! remplacer par ()


function sendMessage (message, fromName, toName)
{
 return("From : " + fromName + "to : " + toName + " Message : " + message);

}

let contactName = "Jean";
let myName = "Ada";
let myMessage = "Je t'apprends à coder tes premières fonctions";
console.log(sendMessage(myMessage, myName, contactName)); 
console.log(sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda"));
console.log(sendMessage("Super on se voit mardi !", "Linda", "Marc"));