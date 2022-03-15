//Botones
var botonAgregar = document.querySelector("#agregar");
var botonIniciar = document.querySelector("#iniciar");
var inputInvisible = document.querySelector("#input-teclado");
var subcontenedor = document.querySelector("#subcontenedor");
//Campos
var palabraNueva = document.querySelector("#nuevaPalabra");
var campoLetrasIncorrectas = document.querySelector("#letras");
var tablero = document.querySelector("canvas") ;
var pincel = tablero.getContext("2d");
//variables declaradas
var palabrasSecretas = ["ARGENTINA","JAVASCRIPT","HTML","CSS","ALURA","BRASIL","PERU","URUGUAY","CHILE","BOLIVIA","ECUADOR"];
var palabra = "" ;
var palabraGuiones ;
var intento = 0;
var letrasInvalidas = [];
var ganar = false;
//Escucho eventos de click
botonIniciar.addEventListener("click", iniciarJuego);

var botonReiniciar = document.querySelector("#reiniciar");

botonAgregar.addEventListener("click",agregarPalabra);
console.log(palabrasSecretas)
//Inicializo el juego
function iniciarJuego(){
    palabraAleatoria();
    dibujarLineas();
     window.addEventListener("keydown",verificarLetraIngresada);   
    
    
}
//Funcion para añadir palabras a la lista
function agregarPalabra(){
    if(palabraNueva.value.length > 0){
    palabrasSecretas.push(palabraNueva.value.toUpperCase());
    palabraNueva.value = ""
    console.log(palabrasSecretas);
    }
}
//Eleccion aleatoria de una palabra
function palabraAleatoria(){
    palabra = palabrasSecretas[Math.floor(Math.random()*palabrasSecretas.length)];
    console.log(palabra)
}
//Remplazo letras por guiones
function dibujarLineas(){
    palabraGuiones = palabra.replace(/./g,"_ ");
    document.querySelector('.output').innerHTML = palabraGuiones;
}
//Verifico si la letra esta presente en la palabra
function verificarLetraIngresada(){
    var tecla = event.key.toUpperCase();
    for (const i in palabra){
        if(ganar == false && intento < 9){
            if(palabra.includes(tecla)){
                if(tecla == palabra[i] ){
                    dibujarLetraCorrecta(i,tecla);
                }
            }else{
                if(letrasInvalidas.includes(tecla) ){
                    console.log("letra ya usada");
                }else{
                    console.log("Letra incorrecta");
                    letrasInvalidas.push(tecla);
                    intento = intento + 1;
                    dibujarMuñeco(intento);
                    dibujarLetraIncorrecta();
                }
            }  
        }
    }
    finDelJuego();
    ganador();
}
//Remplazo los guiones por la palabra correcta
function dibujarLetraCorrecta(i,letra){
    palabraGuiones = palabraGuiones.replaceAt(i*2,letra);
    document.querySelector('.output').innerHTML = palabraGuiones;
}
//Dibujo letras incorrectas
function dibujarLetraIncorrecta(){
    campoLetrasIncorrectas.textContent =letrasInvalidas.join(" ");
}
//Verifico si perdio
function finDelJuego(){
    if(intento == 9){
        campoLetrasIncorrectas.textContent = "PERDISTE :("
        console.log(letrasInvalidas);
    }
}
//Verifico si gano
function ganador(){
    if(palabraGuiones.indexOf('_') < 0){
        ganador = true;
        campoLetrasIncorrectas.textContent = "GANASTE!!!"
    }  
}
//Funcion para remplazar letra por guiones
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 
