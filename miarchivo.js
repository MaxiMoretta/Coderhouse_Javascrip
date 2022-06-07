

function iniciar(){
    let forma = 0
    while (forma <1 || forma >3){
        forma = Number(prompt("Bienvenido, elige el tipo de mate que deseas\n 1-mate perita \n 2-mate cilindro \n 3-mate pirmide"))
    } 
    
    let nombreForma = obtenerForma(forma)
    alert("Buenisimo, has elegido el: " + nombreForma)
    
    let tipo = 0
    while (tipo <1 || tipo >3){
        tipo = Number(prompt("Ahora elije el tipo de mate que te gusta: \n 1-con frase \n 2-con cactus \n 3-personalizado"))
    }   

    let tipoNombre = obtenerTipo(tipo)
    alert("Que buena eleccion la del mate: " + tipoNombre)
    let precioNumero = obtenerPrecio(tipo,forma)
    alert("Tu mate elegido es un :" + nombreForma + " " + tipoNombre + " y cuesta $" + precioNumero)
    
    let cantidad = Number(prompt("Cuantos deseas comprar?"))
    alert("Perfecto, tu pedido se encuentra en el carrito")
    
    console.log("Estás a punto de comprar: " +  cantidad + " unidades de" + " " + nombreForma + " " + tipoNombre)
    console.log("Total $" + obtenerTotal(precioNumero, cantidad))
}

function obtenerTotal(precioUnitario, cantidad){
    return precioUnitario*cantidad
}


function obtenerForma(forma){
    if ( forma === 1){
        return "Mate Perita"
    }
    else if ( forma === 2){
        return "Mate Cilindro"
    }
    else if( forma === 3){
        return "Mate Piramide"
    }
    else {
        throw "No es un numero de forma valido"
    }
}

function obtenerTipo(tipo){
    if ( tipo === 1){
        return "Con Frase"
    }
    else if ( tipo === 2){
        return "Con Cactus"
    }
    else if( tipo === 3){
        return "Personalizado"
    }
    else {
        throw "No es un numero de tipo valido"
    }

}

function obtenerPrecio(tipo, forma){

    let precioForma
    let precioTipo

    if ( forma === 1){
       precioForma = 1500
    }
    else if ( forma === 2){
        precioForma = 2000
    }
    else if( forma === 3){
       precioForma = 2500
    }
    else {
        throw "No es un numero de tipo valido"
    }

    if ( tipo === 1){
        precioTipo = 1000
     }
     else if ( tipo === 2){
         precioTipo = 2000
     }
     else if( tipo === 3){
        precioTipo = 1500 
    }
     else {
         throw "No es un numero de tipo valido"
     }
     return precioForma + precioTipo
}

iniciar()