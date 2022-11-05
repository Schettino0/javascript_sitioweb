//                                        PRIMERA ENTREGA


// function darBienvenida() {
//     alert("Bienvenido " + nombre + ", ¿Que pelicula deseas ver?")
//     console.log("Bienvenido " + nombre + ", ¿Que pelicula deseas ver?")
//     console.log("Selecciona un numero, dependiendo de la pelicula que deseas ver: ")
//     console.log("1. Avengers")
//     console.log("2. Hulk")
//     console.log("3. Thor")
//     console.log("4. Spiderman")
// }

// function entradasDis() {
//     console.log("Actualmente se encuentran disponible " + entradasDisponibles + " Entradas")
//     alert("Actualmente se encuentran disponible " + entradasDisponibles + " Entradas")
// }

// function elegirEntradas(seleccionPelicula) {
//     let entradas = Number(prompt("¿Cuantas entradas deseas comprar para " + seleccionPelicula + "?"))
//     if (entradas > entradasDisponibles) {
//         alert("Entradas no disponibles!")
//     }
//     else {
//         entradasDisponibles = entradasDisponibles - entradas
//         alert("Redirigiendo a la pagina para pagar... magicamente")
//     }

// }

// entradasDisponibles = 10

// let nombre = prompt("Ingresa tu nombre completo: ")
// darBienvenida(nombre)
// if (entradasDisponibles > 1) {
//     while (entradasDisponibles > 0) {
//         entradasDis()
//         seleccionPelicula = prompt("Selecciona un numero, dependiendo de la pelicula que deseas ver: \n1.Avengers \n2.Hulk \n3.Thor \n4.Spiderman ")
//         seleccionPelicula = parseInt(seleccionPelicula)
//         switch (seleccionPelicula) {
//             case 1:
//                 seleccionPelicula = "Avengers"
//                 elegirEntradas(seleccionPelicula)
//                 break;
//             case 2:
//                 seleccionPelicula = "Hulk"
//                 elegirEntradas(seleccionPelicula)
//                 break;
//             case 3:
//                 seleccionPelicula = "Thor"
//                 elegirEntradas(seleccionPelicula)
//                 break;
//             case 4:
//                 seleccionPelicula = "Spiderman"
//                 elegirEntradas(seleccionPelicula)
//                 break;
//             default:
//                 alert("No seleccionaste ninguna pelicula!")
//                 break;
//         }
//     }
//     alert("Ya no quedan entradas!")
// }


//                                       SEGUNDA ENTREGA 

//CLASE PARA CREAR OBJETOS DE LAS PELICULAS DISPONIBLES
class pelicula {
    constructor(nombrePeli, entradas, estreno, horario) {
        this.pelicula = nombrePeli
        this.entradasDisponibles = entradas
        this.estreno = estreno //false o true

    }
}

//USUARIOS GUARDADO Y USUARIO ADMIN (PARA PRUEBA DE INICIO DE SESION)
const usuariosCreados = []
const admin = [usuario = "eduardo", correo = "edu.schettino98@gmail.com", contraseña = "123abc"]

//PELICULAS
const peliculas = []
//ESTRENOS
peliculas.push(new pelicula("Avengers", 20, Boolean(true), "12:30"))
peliculas.push(new pelicula("Hulk", 20, Boolean(true), "14:00"))
peliculas.push(new pelicula("Thor", 20, Boolean(true), "18:00"))
peliculas.push(new pelicula("Spiderman", 20, Boolean(true), "22:00"))
//PELICULAS NO-ESTRENOS
peliculas.push(new pelicula("Amsterdam", 20, Boolean(false), "10:00"))
peliculas.push(new pelicula("El Cuarto Pasajero", 20, Boolean(false), "9:00"))
peliculas.push(new pelicula("REC", 20, Boolean(false), "16:20"))
peliculas.push(new pelicula("Al Oriente", 20, Boolean(false), "7:00"))
console.log(peliculas)


function registro() {
    const usuario = prompt("Ingresa tu usuario")
    const correo = prompt("Ingresa tu correo")
    const contraseña = prompt("Ingresa tu contraseña")
    if (usuario == "" || correo == "" || contraseña == "") {
        alert("No puedes ningun campo vacio")
    }
    else {
        arrayPush = { nombre: usuario, correo: correo, contraseña: contraseña }
        usuariosCreados.push(arrayPush)
        console.log(usuariosCreados)
        alert("Bienvenido " + usuario + ", Tu cuenta ha sido creada con Exito")
        alert("Por favor inicie secion.")
        iniciarSesion()
    }
}
function iniciarSesion() {
    const usuario = prompt("Ingresa tu usuario")
    const contraseña = prompt("Ingresa tu contraseña")

    const busqueda = usuariosCreados.find((i) => i.nombre === usuario)
    if (busqueda !== undefined && busqueda.nombre == usuario && busqueda.contraseña == contraseña) {
        alert("Inicio de sesion Exitoso!")
        estado = true
    }
    else {
        alert("Datos Incorrectos!")
        iniciarSesion()
    }
    console.log(busqueda)
}

//BUSCA LAS PELICULAS SEGUN EL FILTRO (ESTRENO O NO)
function buscarPeli(filtro){
    

    


}







let estado = false
while (estado == false) {
    let opcionBienvenida = Number(prompt("Bienvenido al sitio web del Cine \n ¿Deseas (1) registrarte, (2) iniciar sesion o seguir como (3) invitado?"))
    if (opcionBienvenida == 1 || opcionBienvenida == 2 || opcionBienvenida == 3) {
        switch (opcionBienvenida) {
            case 1:
                registro()
                break;
            case 2:
                iniciarSesion()
                break;
            case 3:
                estado = true
                break;
        }
    }
    else {
        alert("Esa opcion no existe")
    }
}

//FILTRO ENTRE ESTRENO O PELICULAS NORMALES
let estado2 = false
while (estado2 == false) {
    const filtro = Number(prompt("¿Que tipo de pelicula deseas ver? \n (1)Estrenos \n (2)Normales"))
    if (filtro == 1 || filtro == 2) {
        switch (filtro) {
            case 1:
                console.log("opcion 1")
                filtro == 
                buscarPeli(filtro)

                estado2 = true
                break;
            case 1:
                console.log("opcion 2")
                estado2 = true
                break;


        }
    }
    else {
        alert("Esa opcion no existe")
    }


}




