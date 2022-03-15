var botonAgregar = document.querySelector("#agregar");
var botonIniciar = document.querySelector("#iniciar");
var inputInvisible = document.querySelector("#input-teclado");
var subcontenedor = document.querySelector("#tablero");
//Campos
var palabraNueva = document.querySelector("#nuevaPalabra");
var campoLetrasIncorrectas = document.querySelector("#letras");
var tablero = document.querySelector("canvas") ;
var pincel = tablero.getContext("2d");
//variables declaradas
var palabrasSecretas = ["ARGENTINA","JAVASCRIPT","HTML","CSS","ALURA","BRASIL","PERU","URUGUAY","CHILE","BOLIVIA","ECUADOR"];
var palabra = "" ;
var palabraGuiones 
var letrasInvalidas = [];
var ganar = false;
var iniciarJuego = false;
var intento = 0;
//INICIAR JUEGO
botonIniciar.addEventListener("click",function(event){

    event.preventDefault();
    inputInvisible.blur();
    iniciarJuego = true;
    //Empezar partida
    inputInvisible.focus();
    intento = 0;
    palabraAleatoria();
    dibujarLineas();
    campoLetrasIncorrectas.textContent = " ";
    letrasInvalidas= [];
});
subcontenedor.addEventListener("click", function (event) {
    if (iniciarJuego) {
        event.preventDefault();
        inputInvisible.focus();
    }
});
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
inputInvisible.addEventListener("input", function (){
    tecla = inputInvisible.value.toUpperCase();
    inputInvisible.value = "";
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
        if(finDelJuego()){
            iniciarJuego = false;
            inputInvisible.blur();
            campoLetrasIncorrectas.textContent = "PERDISTE :("
            console.log(letrasInvalidas);
        }
        if(ganador()){
            iniciarJuego = false;
            inputInvisible.blur();
            campoLetrasIncorrectas.textContent = "GANASTE!!!"
        }
})
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
    return intento == 9;
}
//Verifico si gano
function ganador(){
    return palabraGuiones.indexOf('_') < 0
}
//Funcion para remplazar letra por guiones
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 