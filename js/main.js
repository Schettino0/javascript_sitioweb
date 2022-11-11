class pelicula {
    constructor(id, titulo, entradas, img, estreno) {
        this.id = id
        this.nombre = titulo
        this.entradas = entradas
        this.imgsrc = img
        this.estreno = estreno
    }
}
const pelicula1 = new pelicula("1", "Avengers", 20, "../assest/img/avengers.jpg", 1)
const pelicula2 = new pelicula("2", "Hulk", 20, "../assest/img/hulk.jpg", 1)
const pelicula3 = new pelicula("3", "Thor", 20, "../assest/img/thor.jpg", 1)
const pelicula4 = new pelicula("4", "Spiderman", 20, "../assest/img/spiderman.jpg", 1)
const pelicula5 = new pelicula("5", "Amsterdam", 20, "../assest/img/amsterdam.webp", 0)
const pelicula6 = new pelicula("6", "El Cuarto Pasajero", 20, "../assest/img/elcuartopasajero.jpg", 0)
const pelicula7 = new pelicula("7", "REC", 20, "../assest/img/red.jpg", 0)
const pelicula8 = new pelicula("8", "Al Oriente", 20, "../assest/img/aloriente.jpg", 0)

const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7, pelicula8]


const containerEstrenos = document.querySelector(".container__carteles")
const containerPeliculas = document.querySelector(".container__peliculas")

const renderizar = () => {
    peliculas.forEach((producto) => {
        const tarjeta = document.createElement("div")
        tarjeta.className = "container__carteles--box"
        tarjeta.innerHTML = `<img src="${producto.imgsrc}"/>
        <h3>${producto.nombre}</h3>
        <button data-id= ${producto.id}>Comprar Entradas</button>`
        if (producto.estreno == 1) {
            containerEstrenos.append(tarjeta)
        }
        if (producto.estreno == 0) {
            containerPeliculas.append(tarjeta)

        }
    })
}



renderizar()
prueba()





