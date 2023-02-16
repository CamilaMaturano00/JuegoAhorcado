//Botones 
var botonAgregar = document.querySelector("#agregar");
var botonIniciar = document.querySelector("#iniciar");
var inputInvisible = document.querySelector("#input-teclado"); //Es un input oculto en el cual se iran tomando las letras que por teclado va colocando
var subcontenedor = document.querySelector("#tablero");
var pOculto = document.querySelector(".agrega")
//Campos
var palabraNueva = document.querySelector("#nuevaPalabra");
var campoLetrasIncorrectas = document.querySelector("#letras");
var tablero = document.querySelector("canvas") ;
var pincel = tablero.getContext("2d");
//variables declaradas
var palabrasSecretas = ["ARGENTINA","BRASIL","PERU","URUGUAY","CHILE","BOLIVIA","ECUADOR"]; //Array de palabras secretas
var palabra = "" ; 
var palabraGuiones;
var letrasInvalidas = []; //Array que contiene las letras incorrectas
var ganar = false; //Booleano con el cual valido si gano el juego o no
var iniciarJuego = false; //Disparador del inicio del juego
var intento = 0; //Contador de los intentos

//INICIAR JUEGO
botonIniciar.addEventListener("click",function(event){
    event.preventDefault();
    inputInvisible.blur(); 
    iniciarJuego = true; //Inicio el juego esto hara que se visualize el tablero de juego
    //Empezar partida
    inputInvisible.focus(); //Pongo foco en el input que va a tomar las letras que se introduzcan por teclado
    intento = 0;            //Inicializo los intentos en 0
    palabraAleatoria();     //Llamo a la funcion para obtener la palabra secreta aleatoriamente
    dibujarLineas();        //Funcion que dibuja lineas segun la cantidad de letras que contenga la palabra
    campoLetrasIncorrectas.textContent = " "; //Inicializo el campo de letras incorrectas
    letrasInvalidas= []; //Inicializo array vacio de letras incorrectas
});

subcontenedor.addEventListener("click", function (event) {
    if (iniciarJuego) {
        event.preventDefault();
        inputInvisible.focus();
    }
});

botonAgregar.addEventListener("click", agregarPalabra); //La palabra se agregara

//Funcion para añadir palabras a la lista
function agregarPalabra(){
    if(palabraNueva.value.length > 0){ //verifico que se haya escrito algo en el campo para guardar
    palabrasSecretas.push(palabraNueva.value.toUpperCase()); // Lo agrego al array de palabras secretas
    palabraNueva.value = ""; //Coloco por defecto nuevamente el input vacio
    pOculto.innerHTML = "¡Palabra Agregada Correctamente!"; 
    setTimeout(function(){
            pOculto.innerHTML = "";
        }, 2000);
    }
    console.log(palabrasSecretas)
}

//Eleccion aleatoria de una palabra
function palabraAleatoria(){
    palabra = palabrasSecretas[Math.floor(Math.random()*palabrasSecretas.length)];
    console.log(palabra)
}

//Remplazo letras por guiones
function dibujarLineas(){
    palabraGuiones = palabra.replace(/./g,"_ "); //Formulo una expresion regular en la cual indico que cuando encuentre una palabra la remplace por un guion
    document.querySelector('.output').innerHTML = palabraGuiones;
}

inputInvisible.addEventListener("input", function (){ //Funcion que se encarga de validar la letra introducida 
    tecla = inputInvisible.value.toUpperCase(); //Transformo en mayuscula la letra
    inputInvisible.value = ""; //el input invisible lo dejo nuevamente vacio
        for (const i in palabra){ //Itero la palabra para buscar coincidencias
            if(ganar == false && intento < 9){ // Si todavia no gana y le quedan intentos realizo la siguiente validacion
                if(palabra.includes(tecla)){ //Pregunto si la letra forma parte de la palabra
                    if(tecla == palabra[i] ){ //Busco la posicion en la que esta la letra que coincide para reemplazarla
                        dibujarLetraCorrecta(i,tecla);
                    }
                }else{
                    if(letrasInvalidas.includes(tecla) ){ 
                        console.log("letra ya usada");
                    }else{
                        console.log("Letra incorrecta"); //si la letra no forma parte de la palabra es colocada en el array de letras invalidas
                        letrasInvalidas.push(tecla);
                        intento = intento + 1; //quito intentos
                        dibujarMuñeco(intento); //y dibujo segun corresponda el muñeco
                        dibujarLetraIncorrecta(); //Coloco la lentra incorrecta en el visor
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
    campoLetrasIncorrectas.textContent = letrasInvalidas.join(" ");
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
String.prototype.replaceAt = function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 