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

class addCarrito {
    constructor(titulo, entradas, funcion) {
        this.titulo = titulo
        this.entradas = entradas
        this.funcion = funcion
    }
}



//FUNCIONES AM 
const funcionAM1 = new funcionesCine("8:30", 30)
const funcionAM2 = new funcionesCine("10:30", 30)
const funcionAM3 = new funcionesCine("11:00", 30)
//FUNCIONES PM
const funcionPM1 = new funcionesCine("12:30", 30)
const funcionPM2 = new funcionesCine("17:30", 30)
const funcionPM3 = new funcionesCine("22:30", 30)


const funcionesAM = [funcionAM1, funcionAM2, funcionAM3]
const funcionesPM = [funcionPM1, funcionPM2, funcionPM3]

const pelicula1 = new pelicula("1", "Avengers", "assest/img/avengers.jpg", 1, funcionesAM)
const pelicula2 = new pelicula("2", "Hulk", "assest/img/hulk.jpg", 1, funcionesPM)
const pelicula3 = new pelicula("3", "Thor", "assest/img/thor.jpg", 1, funcionesAM)
const pelicula4 = new pelicula("4", "Spiderman", "assest/img/spiderman.jpg", 1, funcionesPM)
const pelicula5 = new pelicula("5", "Amsterdam", "assest/img/amsterdam.webp", 0, funcionesAM)
const pelicula6 = new pelicula("6", "El Cuarto Pasajero", "assest/img/elcuartopasajero.jpg", 0, funcionesPM)
const pelicula7 = new pelicula("7", "REC", "assest/img/red.jpg", 0, funcionesAM)
const pelicula8 = new pelicula("8", "Al Oriente", "assest/img/aloriente.jpg", 0, funcionesPM)
let peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8]

let carrito = []





//LOCALSTORAGE



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
        <button  id="verhorarios" >Ver Horarios</button>
        <div class="horarios">
        <h4>Funciones: </h4>
        <div class="opciones">
        <form class="formulario" data-id= "${producto.id}" id ="${producto.nombre}">
        <input type="radio" name="horario" id="${i}" value=${producto.horarios[0].hora}>
        <label for=${i}>${producto.horarios[0].hora}</label>
        <input type="radio" name="horario" id="${i + 1}" value=${producto.horarios[1].hora}>
        <label for="${i + 1}">${producto.horarios[1].hora}</label>
        <input type="radio" name="horario" id="${i + 2}" value=${producto.horarios[2].hora}>
        <label for="${i + 2}">${producto.horarios[2].hora}</label><br>
        <div class="entradasDisp">
        <span>${producto.horarios[0].entradas}──</span><span id="mostrar">${producto.horarios[1].entradas}──</span><span id="mostrar">${producto.horarios[2].entradas}</span>
        </div>
        <!--SELECIONAR CANTIDAD DE ENTRADAS -->
        <h4>Cantidad:</h4>
        <select name="cantidad">
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        </select> <br>
        <input class="buttonhora" type="submit" value="Agregar al Carrito" id="carrito">
        <input class="buttonhora" type="reset" value="Limpiar">
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

    const formulario = document.querySelectorAll(".formulario")
    formulario.forEach((e) => {
        e.addEventListener('submit', (x) => {
            x.preventDefault()
            const transactionFormData = new FormData(e)
            const cantidad = transactionFormData.get("cantidad")
            const funcion = transactionFormData.get("horario")
            const movie = e.getAttribute('id')
            console.log(movie)
            const id = e.getAttribute("data-id")
            const mensaje = `${cantidad} Entradas para la funcion de las ${funcion} para ${movie}`
            console.log(mensaje)
            if (funcion == null) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes seleccionar una funcion!'
                })
            }
            else {
                agregarCarrito(cantidad, funcion, id, movie)
            }
        })
    })

}

const agregarCarrito = (cantidad, funcion, id, movie) => {
    const eleccion = peliculas.find((i) => i.nombre == movie)
    const add = new addCarrito(eleccion.nombre, cantidad, funcion)
    let resta = eleccion.horarios.find(a => a.hora == funcion)
    resta.entradas -= cantidad
    carrito.push(add)
    const carroJSON = JSON.stringify(carrito)
    localStorage.setItem("carrito", carroJSON)
    const peliculasJSON = JSON.stringify(peliculas)
    localStorage.setItem("peliculas", peliculasJSON)
    Swal.fire({
        icon: 'success',
        title: 'Excelente!',
        html: `<h4>A sido agregado a tu carrito: <br>
        -${cantidad} Entradas para la pelicula ${movie}, funcion : ${funcion}</h4>`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ver Carrito',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cerrar"
    }).then((result)=>{
        if(result.isConfirmed){
            mostrarCarrito()
        }
    })

}

const cargarCarrito = () => {
    if (localStorage.getItem("carrito") !== null) {
        // Carga la información
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
}

const cargarPeliculas = () => {
    if (localStorage.getItem("peliculas") !== null) {
        // Carga la información
        peliculas = JSON.parse(localStorage.getItem('peliculas'));
    }
    else {
        const peliculasJSON = JSON.stringify(peliculas)
        localStorage.setItem("peliculas", peliculasJSON)
        location.reload()
    }
}


// const actualizarEntradas = () => {
//     peliculas.forEach((producto) => {
//             const ubicacion = document.querySelector(".entradasDisp")
//             const div = document.createElement("div")
//             div.className = "a"
//             div.innerHTML = `<span>${producto.horarios[0].entradas}──</span><span id="mostrar">${producto.horarios[1].entradas}──</span><span id="mostrar">${producto.horarios[2].entradas}</span>`
//             ubicacion.append(div)

//         })
// }

// const info = `<span>${producto.horarios[0].entradas}──</span><span id="mostrar">${producto.horarios[1].entradas}──</span><span id="mostrar">${producto.horarios[2].entradas}</span>`

cargarPeliculas()
renderizar()
cargarCarrito()
mostrarhorarios()
formulario()











// let transactionFormData = new FormData(e)
// let cantidad = transactionFormData.get("cantidad")
// let funcion = transactionFormData.get("horario")
// let mensaje = `${cantidad} Entradas para la funcion de las ${funcion} ${producto.nombre} + `
// console.log(mensaje)







