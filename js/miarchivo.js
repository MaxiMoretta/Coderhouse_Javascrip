
const formas = ["perita", "cilindro","pirámide", "gota"
]
const tipos = ["frase", "cactus", "flores", "personalizado"
]

const listaMates = [ {
    id: 1,
    nombre: "Mate Perita",
    precio: 1000,
    madera: "pino",
    img: "mate-perita.png"
},

{
    id: 2,
    nombre: "Mate Piramide",
    precio: 2500,
    madera: "cerezo",
    img: "mate-piramide.png"
},

{
    id: 3,
    nombre: "Mate Cilindro",
    precio: 2000,
    madera: "alamo",
    img: "mate-cilindro.png"
},

{
    id: 4,
    nombre: "Mate Gota",
    precio: 3000,
    madera: "pino",
    img: "mate-gota.png"
}
]

const listaTipos = [ {
    id: 1,
    nombre: "Frase",
    precio: 1500,
    img: "mate-frase.png"
},

{
    id: 2,
    nombre: "Cactus",
    precio: 1800,
    img: "mate-cactus.png"
},

{
    id: 3,
    nombre: "Flores",
    precio: 2000,
    img: "mate-flores.png"
},

{
    id: 4,
    nombre: "Personalizado",
    precio: 3000,
    img: "mate-personalizado.png"
}
]

const listaformas = document.getElementById("listaformas")

listaMates.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add("col-sm-3")
    div.innerHTML = `<h4>${producto.nombre}</h4>
                    <img src="img/${producto.img}" class="col-formas" value="${producto.nombre}"/>
                    <p>Precio: $ ${producto.precio}</p>
                    <hr>
                    `   
    listaformas.append(div)
})

btnsFormas= document.getElementsByClassName("col-formas") 

for (let index = 0; index < btnsFormas.length; index++) {
    const btn = btnsFormas[index]

    btn.addEventListener('click', (event) => {
        const value = event.target.getAttribute("value")
        console.log(value)
        const campoforma = document.getElementById("formForma")
        campoforma.setAttribute("value", value)
    })  
}

const listatiposcontainer = document.getElementById("listatipos")

listaTipos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add("col-sm-3")
    div.innerHTML = `<h4>${producto.nombre}</h4>
                    <img src="img/${producto.img}" class="col-tipos" value="${producto.nombre}"/>
                    <p>Precio: $ ${producto.precio}</p>
                    <hr>
                    `   
    listatiposcontainer.append(div)
})

btnsTipos= document.getElementsByClassName("col-tipos") 

for (let index = 0; index < btnsTipos.length; index++) {
    const btn = btnsTipos[index]

    btn.addEventListener('click', (event) => {
        const value = event.target.getAttribute("value")
        console.log(value)
        const campoforma = document.getElementById("formTipo")
        campoforma.setAttribute("value", value)
    })  
}


const precios = {
   formas: {
        perita: 1000,
        cilindro: 2000,
        pirámide: 2500,
        gota: 3000,
    },
   
    tipos: {
        frase: 1500,
        cactus: 1800,
        flores: 2000,
        personalizado: 3000
    }
}

class Mate { 
    constructor( a, b, c){
        this.forma = formas[a]
        this.tipo = tipos[b]
        this.cantidad = c
        this.precio = 0
    }
    información(){
        alert("Tu mate elgido fue un: " + this.forma + " con " + this.tipo + " , y te llevas " + this.cantidad + " unidades")
    }
    calcularPrecio(){
        this.precio = (precios.formas[this.forma] + precios.tipos[this.tipo]) * this.cantidad
        alert("Estas a punto de pagar: $" + this.precio)
    }
}

function crearMate(){
    let forma = 0
    while (forma <1 || forma >4){
        forma = Number(prompt("Bienvenido, elige el tipo de mate que deseas\n 1-mate perita \n 2-mate cilindro \n 3-mate pirámide \n 4-mate gota"))
    } 
    forma = forma-1
    
    let tipo = 0
    while (tipo <1 || tipo >4){
        tipo = Number(prompt("Ahora elije el tipo de mate que te gusta: \n 1-con frase \n 2-con cactus \n 3- con flores \n 4-personalizado"))
    }   
    tipo = tipo-1

    let cantidad = Number(prompt("Cuantos deseas comprar?"))

    const miMate = new Mate(forma, tipo, cantidad)

    miMate.información()
    miMate.calcularPrecio()

    return miMate
}

function iniciar(){
    carrito = [

    ]
 
    let continuar = true

    while(continuar === true){
       let mate = crearMate()
       carrito.push(mate)
       let avance = prompt("Deseas seguir comprando?")
            if( avance == "no"){
                continuar = false
            }
    }
    alert("Usted está por comprar: " + carrito.length + " modelos de mates")

    const precioTotal = carrito.reduce((acc, element) => acc + element.precio, 0 )

    alert("El valor total a abonar es de $ " + precioTotal)
}

/* iniciar() */