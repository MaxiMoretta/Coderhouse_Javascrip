const carrito = []

const formas = ["perita", "cilindro","pirámide", "gota"]

const tipos = ["frase", "cactus", "flores", "personalizado"]

const listaMates = [ {
    id: 1,
    nombre: "perita",
    precio: 1000,
    madera: "pino",
    img: "mate-perita.png"
},

{
    id: 2,
    nombre: "pirámide",
    precio: 2500,
    madera: "cerezo",
    img: "mate-piramide.png"
},

{
    id: 3,
    nombre: "cilindro",
    precio: 2000,
    madera: "alamo",
    img: "mate-cilindro.png"
},

{
    id: 4,
    nombre: "gota",
    precio: 3000,
    madera: "pino",
    img: "mate-gota.png"
}
]

const listaTipos = [ {
    id: 1,
    nombre: "frase",
    precio: 1500,
    img: "mate-frase.png"
},

{
    id: 2,
    nombre: "cactus",
    precio: 1800,
    img: "mate-cactus.png"
},

{
    id: 3,
    nombre: "flores",
    precio: 2000,
    img: "mate-flores.png"
},

{
    id: 4,
    nombre: "personalizado",
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
        this.forma = a
        this.tipo = b
        this.cantidad = c
        this.precio = 0
    }
    información(){
        alert("Tu mate elgido fue un: " + this.forma + " con " + this.tipo + " , y te llevas " + this.cantidad + " unidades")
    }
    calcularPrecio(){
        this.precio = (precios.formas[this.forma] + precios.tipos[this.tipo]) * this.cantidad
    }
}

const añadirCarrito = document.getElementById("agregarCarrito")

añadirCarrito.addEventListener('click', (event) => {
    const mate = new Mate(document.getElementById("formForma").value,
     document.getElementById("formTipo").value, 
     parseInt(document.getElementById("formCantidad").value))

     mate.calcularPrecio()
     carrito.push(mate)
     console.log(carrito)

    const cardCarrito = document.getElementById("carrito")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(mate.cantidad + " mate " + mate.forma + " tipo " + mate.tipo))
    cardCarrito.appendChild(li)

    const precioPagar = document.getElementById("precioTotal")
    precioPagar.append(calcularPrecio())
})

1