let numeroAdivinador = Math.floor(Math.random() * 10)

let numeroIngresado = Number(prompt("Ingrese el numero que estoy pensando"))

for (let intentos = 3; intentos >0; intentos --) {
    console.log(intentos)
    if (numeroIngresado === numeroAdivinador) {
        alert("Adivinaste, sos genial!")
        break
    } else if (intentos >1) {
        alert("No te aflijas, te quedan " + intentos + "intentos")
    } else {
        alert("Lo siento, perdiste.")
        break
    }

    numeroIngresado = Number(prompt ("Ingresá de nuevo el numero que estoy pensando"))
}

alert("El numero que tenia en mente era " + numeroAdivinador)