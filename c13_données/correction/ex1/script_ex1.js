const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];
  
  console.log(candidates[0])
  console.log(candidates[7])

  // Fonction fléchée raccourcie - Que s'il y a une instruction - ES2015
  candidates.forEach(candidate => console.log(candidate))

  // ES2015 - Fonction fléchée avec plusieurs instructions
  candidates.forEach(candidate => {
    console.log("Nom: ")
    console.log(candidate)
  })

  // Sans fonction fléchée
  candidates.forEach(function(candidate) {
    console.log(candidate)
  })