

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
const valorEntrada = 3900
//PELICULAS
const peliculas = []
const carrito = []
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
        alert("Bienvenido " + usuario + ", Tu cuenta ha sido creada con Exito")
        alert("Por favor inicie sesion.")
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
        tipodePeli()
    }
    else {
        alert("Datos Incorrectos!")
    }
}
function comprar(eleccionPeli, buscarPelicula) {
    eleccionPeli = eleccionPeli - 1
    while (true) {
        let cantidad = Number(prompt("Ingresa la cantidad de entradas que deseas de la pelicula " + buscarPelicula[eleccionPeli].pelicula + ":"))
        if (cantidad <= buscarPelicula[eleccionPeli].entradasDisponibles && cantidad >= 0 && cantidad !== 0) {
            buscarPelicula[eleccionPeli].entradasDisponibles = buscarPelicula[eleccionPeli].entradasDisponibles - cantidad
            let compra = cantidad * valorEntrada
            alert("La entrada tiene un valor de $" + valorEntrada + " CLP, por lo tanto tu compra sera de: $" + compra + ", sera agregada a tu carrito.")
            buscarPelicula[eleccionPeli].valor = compra
            buscarPelicula[eleccionPeli].entradasToBuy = cantidad

            carrito.push(buscarPelicula[eleccionPeli])
            finalizando()

            break
        }
        alert("Se excede del limite de entradas!, vuele a intentarlo por favor.")
        cantidad = 0
    }
}

//BUSCA LAS PELICULAS SEGUN EL FILTRO (ESTRENO O NO)
function buscarPeli(filtro) {
    const buscarPelicula = peliculas.filter((i) => i.estreno == filtro) //  BUSCA LAS PELICULAS QUE CUMPLAN CON EL FILTRO DE : ES ESTRENO O NO?
    while (true) {
        const eleccionPeli = Number(prompt("¿Para que pelicula deseas comprar entradas?\n" + "(1) " + buscarPelicula[0].pelicula + "  ----  Entradas disponibles: " + buscarPelicula[0].entradasDisponibles + "\n (2) " +
            buscarPelicula[1].pelicula + "  ----  Entradas disponibles: " + buscarPelicula[1].entradasDisponibles + "\n (3) " + buscarPelicula[2].pelicula + "  ----  Entradas disponibles: " + buscarPelicula[2].entradasDisponibles + "\n (4) " + buscarPelicula[3].pelicula + "  ----  Entradas disponibles: " + buscarPelicula[3].entradasDisponibles))
        if (eleccionPeli == 1 || eleccionPeli == 2 || eleccionPeli == 3 || eleccionPeli == 4) {
            comprar(eleccionPeli, buscarPelicula)
            break
        }
        else {
            alert("Esa opcion no existe")
        }
    }




}

function primeringreso() {
    let estado = false
    while (estado == false) {
        let opcionBienvenida = Number(prompt("Bienvenido al sitio web del Cine \n ¿Deseas (1) Registrarte, (2) iniciar sesion o seguir como (3) invitado?"))
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
                    tipodePeli()
                    break;
            }
        }
        else {
            alert("Esa opcion no existe")
        }
    }
}


//FILTRO ENTRE ESTRENO O PELICULAS NORMALES

function tipodePeli() {
    let estado2 = false
    while (estado2 == false) {
        let filtro = Number(prompt("¿Que tipo de pelicula deseas ver? \n (1)Estrenos \n (2)Normales"))
        if (filtro == 1 || filtro == 2) {
            switch (filtro) {
                case 1:
                    filtro = Boolean(true)
                    buscarPeli(filtro)
                    estado2 = true
                    break;
                case 2:
                    filtro = Boolean(false)
                    buscarPeli(filtro)
                    estado2 = true
                    break;


            }
        }
        else {
            alert("Esa opcion no existe")
        }
    }
}

function finalizando() {


    while (true) {
        let finalizar = Number(prompt("¿Deseas (1) Finalizar tu compra, (2) Ver tu carrito o (3) Comprar mas entradas?"))
        if (finalizar == 1 || finalizar == 2 || finalizar == 3) {
            switch (finalizar) {
                case 1:
                    let total = 0
                    carrito.forEach(function (a) { total += a.valor })
                    console.log(total)

                    alert("Seras redirigido a la pagina para pagar el total de tu compra, el cual es de: $" + total)

                    break;
                case 2:
                    productos = []
                    carrito.forEach(element => {
                        productos.push(element.pelicula + " -- " + element.entradasToBuy + " Entradas -- $ " + element.valor)
                        console.log(productos)
                    })
                    const mensaje = productos.join("\n")
                    console.log(mensaje)
                    alert("Las entradas que compraras son las siguientes: \n" + mensaje)
                    finalizando()

                    break;
                case 3:
                    tipodePeli()

                    break;

            }
            break

        }
        else {
            alert("Esa opcion no existe")
        }
    }
}
for (let i = 0; i < 1; i++) {
    primeringreso()
}
