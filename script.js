let stockAlumettes = 50;

function retirer() {
  let alumettesMoins = prompt("Combien d'alumettes voulez-vous retirer ?")
  alumettesMoins = Number(alumettesMoins)
    if (alumettesMoins > stockAlumettes) {
      alert(`Vous ne pouvez pas retirer plus de ${stockAlumettes}`)
      return
    }


    if (!isNaN(alumettesMoins) && alumettesMoins >= 1 && alumettesMoins <= 6) {
        stockAlumettes = stockAlumettes - alumettesMoins
        console.log("stock", stockAlumettes)
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
    alert("Bravo, tu as gagné !")
    stockAlumettes = 50
    retirer()
    
  }
}

retirer()
