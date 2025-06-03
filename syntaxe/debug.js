// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let article1 = 10
let article2 = 20
// Nous calculons le total
let total = article1 + article2
//console.log(tot)
// Prix d'un troisieme article
let article3 = 50
//console.log(a3)
// Nous ajoutons a3 au total
total += article3

console.log("Le prix total avant reduction est de : ", total)

//Nous appliquons 20% de reduction
let reduction = total*0.2
let finalPrice = total - reduction

console.log("Le prix total après reduction est de : ", finalPrice)