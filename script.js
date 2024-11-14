let stockAlumettes = 50;
let joueur = 1;

function retirer() {
  let alumettesMoins = prompt(`Joueur ${joueur}, combien d'alumettes voulez-vous retirer ?`)
  alumettesMoins = Number(alumettesMoins)
    if (alumettesMoins > stockAlumettes) {
      alert(`Vous ne pouvez pas retirer plus de ${stockAlumettes}`)
      return
    }


    if (!isNaN(alumettesMoins) && alumettesMoins >= 1 && alumettesMoins <= 6) {
        stockAlumettes = stockAlumettes - alumettesMoins
        console.log("stock", stockAlumettes)
        joueur = joueur === 1 ? 2 : 1;
        boucleAsk(retirer)
    } else {
      alert("Veuillez retirer entre 1 et 6 alumettes")
      console.log("erreur")
      return
    }
    
}



function boucleAsk(retirer) {
  if (stockAlumettes > 0) {
    while (stockAlumettes > 0) {
      retirer()
    }
  } else {
    win()
  }
}


function win() {
  if (stockAlumettes === 0) {
    alert(`Bravo joueur ${joueur}, tu as gagné !`)
    stockAlumettes = 50
    joueur = 1
    retirer()
    
  }
}

retirer()
