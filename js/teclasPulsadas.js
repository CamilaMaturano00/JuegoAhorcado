/*
var botonAgregar = document.querySelector("#agregar");
var botonElegirPalabra = document.querySelector("#jugar");
var botonIniciar = document.querySelector("#iniciar");
//Campos
var palabraNueva = document.querySelector("#nuevaPalabra");
var campoLetrasIncorrectas = document.querySelector("#letras");
var tablero = document.querySelector("canvas") ;
var pincel = tablero.getContext("2d");
//variables declaradas
var palabrasSecretas = ["ALURA","JAVASCRIPT","ORACLE","HTML","CSS"];

var palabraAdivinar= [];
var palabraMostrar= [];

//Funciones
botonIniciar.addEventListener("click",iniciar);
//Funcion para añadir palabras a la lista
botonAgregar.addEventListener("click",agregarPalabra);
//Eleccion de Palabra aleatoria
botonElegirPalabra.addEventListener("click",eleccionAleatoriaPalabra);

//Creo funcion para guiones segun la palabra aleatoria
botonIniciar.addEventListener("click",guionesPa);
//Escucho al teclado
botonIniciar.addEventListener("click", window.onkeydown);

//Añado pañabra nueva
function agregarPalabra(){
    if(palabraNueva.value.length > 0){
    palabrasSecretas.push(palabraNueva.value);
    console.log(palabrasSecretas);
    }
}
//Elijo aleatoriamente una plabra del array
function eleccionAleatoriaPalabra(){
    var random = Math.floor(Math.random()*palabrasSecretas.length);
    var palabraAleatoria = palabrasSecretas[random];
    palabraAdivinar = palabraAleatoria.split('');
    palabraMostrar = palabraAdivinar.replace(/./g,"_");
    return palabraMostrar;
}

//Capturo evento teclado y evaluo tecla presionada
window.onkeydown = capturoTeclaPresionada;
var intento = 0;
var letrasUsadas = [];
var letrasInvalidas = [];

function capturoTeclaPresionada(e){
    var tecla = event.key.toUpperCase();
    validarLetra(e);
        if(palabra.includes(tecla)){
            console.log(tecla);
            letrasUsadas.push(tecla);
            dibujarPalabra(tecla,550);
        }else {
            if(letrasInvalidas.includes(tecla)){
                console.log("letra ya usada");
            }else{
                console.log("Letra incorrecta");
                letrasInvalidas.push(tecla);
                intento = intento + 1;
                dibujarMuñeco(intento);
                campoLetrasIncorrectas.textContent =letrasInvalidas.join(" ");
                }
            }
    if(intento == 9){
        console.log("Perdiste");
        console.log(letrasInvalidas);
    }
}
function guionesPa(){
    var pincel = tablero.getContext("2d");
    pincel.beginPath();
    pincel.font = "44pt Verdana";
    pincel.fillStyle = "black";
    pincel.fillText(palabraMostrar,450,520);
}
//Creo los guiones para palabras
function guionesPalabra(){
    var x = 450;
    var y = 520; 
    var z = 0;
    while (z < palabra.length){
    dibujarLineas(x,y);
    x = x+ 80;
    y = y + 80;
    z = z +1;
    }
    console.log(palabra)
}
//Dibujo la palabra
function dibujarPalabra(texto,x){
    var pincel = tablero.getContext("2d");
    pincel.beginPath();
    pincel.font = "44pt Verdana";
    pincel.fillStyle = "black";
    pincel.fillText(texto,x,450);
}
//Valido que solo permita letras
function validarLetra(e){
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = "abcdefghijklmnñopqrstuvwxyz";
    var especiales = [8,13];
    var tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        alert("Ingresar solo letras");
        return false;
    } 
    console.log(tecla);
}

//Dibujo muñeco
function dibujarMuñeco(intento){
    if(intento == 1){
            //linea 1
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(120,600);
        pincel.lineTo(120,50);
        pincel.stroke();
    }
    if( intento == 2){
        //linea 2
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(350,50);
        pincel.lineTo(116,50);
        pincel.stroke();
    }
    if( intento == 3){
        //linea 3
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(346,132);
        pincel.lineTo(346,50);
        pincel.stroke();
    }   
    if( intento == 4){
        //linea 4 Cabeza
        pincel.fillStyle = "black"
        pincel.beginPath();
        pincel.arc(346,180,45,0,2*3.14);
        pincel.stroke();
    }
    if( intento == 5){
        //linea 5
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(346,222);
        pincel.lineTo(346,380);
        pincel.stroke();
    }
    if( intento == 6){
        //linea 6 Brazo derecho
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(346,280);
        pincel.lineTo(410,220);
        pincel.stroke();
    }   
    if( intento == 7){
        //linea 7 Brazo izquierdo
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(346,280);
        pincel.lineTo(286,220);
        pincel.stroke();
    }
    if( intento == 8){
        //linea 8 Pierna izquierda
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(346,376);
        pincel.lineTo(286,430);
        pincel.stroke();
    }
    if( intento == 9){
        //linea 9 Pierna derecha
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(346,376);
        pincel.lineTo(410,430);
        pincel.stroke();
        }
}
    for (let i=0 ; i < palabra.length; i++){
        if(palabra[i] == tecla){
            palabraGuiones[i] = tecla;
        }
    } 






*/