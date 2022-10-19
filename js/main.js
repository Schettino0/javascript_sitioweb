function darBienvenida() {
    alert("Bienvenido " + nombre + ", ¿Que pelicula deseas ver?")
    console.log("Bienvenido " + nombre + ", ¿Que pelicula deseas ver?")
    console.log("Selecciona un numero, dependiendo de la pelicula que deseas ver: ")
    console.log("1. Avengers")
    console.log("2. Hulk")
    console.log("3. Thor")
    console.log("4. Spiderman")
}

function entradasDis() {
    console.log("Actualmente se encuentran disponible " + entradasDisponibles + " Entradas")
    alert("Actualmente se encuentran disponible " + entradasDisponibles + " Entradas")
}

function elegirEntradas(seleccionPelicula) {
    let entradas = Number(prompt("¿Cuantas entradas deseas comprar para " + seleccionPelicula + "?"))
    if (entradas > entradasDisponibles) {
        alert("Entradas no disponibles!")
    }
    else {
        entradasDisponibles = entradasDisponibles - entradas
        alert("Redirigiendo a la pagina para pagar... magicamente")
    }

}

entradasDisponibles = 10

let nombre = prompt("Ingresa tu nombre completo: ")
darBienvenida(nombre)
if (entradasDisponibles > 1) {
    while (entradasDisponibles > 0) {
        entradasDis()
        seleccionPelicula = prompt("Selecciona un numero, dependiendo de la pelicula que deseas ver: \n1.Avengers \n2.Hulk \n3.Thor \n4.Spiderman ")
        seleccionPelicula = parseInt(seleccionPelicula)
        switch (seleccionPelicula) {
            case 1:
                seleccionPelicula = "Avengers"
                elegirEntradas(seleccionPelicula)
                break;
            case 2:
                seleccionPelicula = "Hulk"
                elegirEntradas(seleccionPelicula)
                break;
            case 3:
                seleccionPelicula = "Thor"
                elegirEntradas(seleccionPelicula)
                break;
            case 4:
                seleccionPelicula = "Spiderman"
                elegirEntradas(seleccionPelicula)
                break;
            default:
                alert("No seleccionaste ninguna pelicula!")
                break;
        }
    }
    alert("Ya no quedan entradas!")
}










