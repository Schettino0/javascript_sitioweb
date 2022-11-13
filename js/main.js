class pelicula {
    constructor(id, titulo, img, estreno, horarios) {
        this.id = id
        this.nombre = titulo
        this.imgsrc = img
        this.estreno = estreno
        this.horarios = horarios
    }
}
class funcionesCine {
    constructor(hora, entradas) {
        this.hora = hora
        this.entradas = entradas
    }
}
//FUNCIONES AM 
const funcionAM1 = new funcionesCine("8:30", 20)
const funcionAM2 = new funcionesCine("10:30", 20)
const funcionAM3 = new funcionesCine("11:00", 20)
//FUNCIONES PM
const funcionPM1 = new funcionesCine("12:30", 20)
const funcionPM2 = new funcionesCine("17:30", 20)
const funcionPM3 = new funcionesCine("22:30", 20)

const funcionesAM = [funcionAM1, funcionAM2, funcionAM3]
const funcionesPM = [funcionPM1, funcionPM2, funcionPM3]

const pelicula1 = new pelicula("1", "Avengers", "../assest/img/avengers.jpg", 1, funcionesAM)
const pelicula2 = new pelicula("2", "Hulk", "../assest/img/hulk.jpg", 1, funcionesPM)
const pelicula3 = new pelicula("3", "Thor", "../assest/img/thor.jpg", 1, funcionesAM)
const pelicula4 = new pelicula("4", "Spiderman", "../assest/img/spiderman.jpg", 1, funcionesPM)
const pelicula5 = new pelicula("5", "Amsterdam", "../assest/img/amsterdam.webp", 0, funcionesAM)
const pelicula6 = new pelicula("6", "El Cuarto Pasajero", "../assest/img/elcuartopasajero.jpg", 0, funcionesPM)
const pelicula7 = new pelicula("7", "REC", "../assest/img/red.jpg", 0, funcionesAM)
const pelicula8 = new pelicula("8", "Al Oriente", "../assest/img/aloriente.jpg", 0, funcionesPM)
const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8]

const carrito = []

//EJEMPLO DE OBJETO CON OBJETO DENTRO , DISTINTAS ENTRADAS DEPENDIENDO DEL HORARIO DE LA FUNCION.
const peliEjemplo = {
    tituloPelicula: "Avengers",
    horarios: {
        funcion1: {
            hora: "12:30",
            entradas: 20
        },
        funcion2: {
            hora: "14:00",
            entradas: 30
        },
        funcion3: {
            hora: "16:00",
            entradas: 30
        }
    },
    entreno: 1
}
////////////////////////////////////////////////////////////////////////////////////////////////
const containerEstrenos = document.querySelector(".container__estrenos")
const containerPeliculas = document.querySelector(".container__peliculas")

const renderizar = () => {
    let i = 0
    peliculas.forEach((producto) => {
        const tarjeta = document.createElement("div")
        tarjeta.className = "container__carteles--box"
        tarjeta.innerHTML = `<img src="${producto.imgsrc}"/>
        <h3>${producto.nombre}</h3>
        <button  id="verhorarios" data-id= ${producto.id}>Ver Horarios</button>
        <div class="horarios">
        <h4>Funciones: </h4>
        <div class="opciones">
        <form class="formulario" id="${producto.nombre}">
        <input type="radio" name="horario" id="${i}" value=${producto.horarios[0].hora}>
        <label for=${i}>${producto.horarios[0].hora}</label>
        <input type="radio" name="horario" id="${i + 1}" value=${producto.horarios[1].hora}>
        <label for="${i + 1}">${producto.horarios[1].hora}</label>
        <input type="radio" name="horario" id="${i + 2}" value=${producto.horarios[2].hora}>
        <label for="${i + 2}">${producto.horarios[2].hora}</label><br>
        <!--SELECIONAR CANTIDAD DE ENTRADAS -->
        <h4>Cantidad:</h4>
        <select name="cantidad">
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        </select> <br>
        <input class="buttonhora" type="submit" value="Agregar al Carrito">
        </form>
        </div>`
        if (producto.estreno == 1) {
            containerEstrenos.append(tarjeta)
        }
        if (producto.estreno == 0) {
            containerPeliculas.append(tarjeta)

        }
        i = i + 3

    })
}

const mostrarhorarios = () => {
    const btnVerhorarios = document.querySelectorAll("#verhorarios")
    const divHorarios = document.querySelectorAll(".horarios")
    btnVerhorarios.forEach((e) => {
        e.addEventListener("click", () => {
            const bloque = e.parentElement
            const editar = bloque.querySelector(".horarios")
            if (editar.classList.contains('ver')) {
                editar.classList.remove('ver')
            }
            else {
                editar.classList.add('ver')
            }
        })
    })

}

const formulario = () => {

    const opciones = document.querySelectorAll(".opciones")
    const boton = document.querySelector(".buttonhora")
    const formulario = document.querySelectorAll(".formulario")
    formulario.forEach((e) => {
        e.addEventListener('submit', (x) => {
            console.log(e)
            let transactionFormData = new FormData(e)
            let cantidad = transactionFormData.get("cantidad")
            let funcion = transactionFormData.get("horario")
            const movie = e.getAttribute('id')
            const mensaje = `${cantidad} Entradas para la funcion de las ${funcion} para ${movie}`
            console.log(mensaje)
            x.preventDefault()
            agregarCarrito(cantidad,funcion,movie)
        })
    })

}

const agregarCarrito= (cantidad,funcion,movie)=>{
    console.log("hola" + cantidad + funcion +movie)
}

renderizar()
mostrarhorarios()
formulario()











// let transactionFormData = new FormData(e)
// let cantidad = transactionFormData.get("cantidad")
// let funcion = transactionFormData.get("horario")
// let mensaje = `${cantidad} Entradas para la funcion de las ${funcion} ${producto.nombre} + `
// console.log(mensaje)







