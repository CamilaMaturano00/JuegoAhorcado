//Utilizo canva para dibujar el muñeco
var botonJugar = document.querySelector("#iniciar");

var botonReiniciar = document.querySelector("#reiniciar");
var tablero = document.querySelector("canvas") ;

botonJugar.addEventListener("click",dibujarTablero);
botonReiniciar.addEventListener("click",reiniciarPartida);

function dibujarTablero(){
//tablero
var pincel = tablero.getContext("2d");
pincel.fillStyle = "#2ef8a0"
pincel.fillRect(0,0,1280,500)
//Base
pincel.fillStyle = "black"
pincel.beginPath();
pincel.moveTo(0,500);
pincel.lineTo(120,450);
pincel.lineTo(230,500);
pincel.fill();
}

function reiniciarPartida(){
    window.location.reload();
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
