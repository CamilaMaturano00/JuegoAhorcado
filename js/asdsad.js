/*//linea 1 letras
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(550,560);
pincel.lineTo(620,560);
pincel.stroke();

//linea 2 letras
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(650,560);
pincel.lineTo(720,560);
pincel.stroke();

//linea 3 letras
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(750,560);
pincel.lineTo(820,560);
pincel.stroke();

//linea 4 letras
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(850,560);
pincel.lineTo(920,560);
pincel.stroke();
*/
/*var x = 550;
var y = 620; 
while (x < 1500){
    dibujarLineas(x,y);
    x = x+ 100;
    y = y + 100;

}
}
function dibujarLineas(xComienzo,xFinal){
    var pincel = tablero.getContext("2d");
        pincel.fillStyle = "black"
        pincel.lineWidth = 8;
        pincel.beginPath();
        pincel.moveTo(xComienzo,560);
        pincel.lineTo(xFinal,560);
        pincel.stroke();
}*/


muñeco
//linea 1
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(120,600);
pincel.lineTo(120,50);
pincel.stroke();
//linea 2
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(350,50);
pincel.lineTo(116,50);
pincel.stroke();
//linea 3
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(346,132);
pincel.lineTo(346,50);
pincel.stroke();
//linea 4 Cabeza
pincel.fillStyle = "black"
pincel.beginPath();
pincel.arc(346,180,45,0,2*3.14);
pincel.stroke();
//linea 5
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(346,222);
pincel.lineTo(346,380);
pincel.stroke();
//linea 6 Brazo derecho
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(346,280);
pincel.lineTo(410,220);
pincel.stroke();
//linea 7 Brazo izquierdo
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(346,280);
pincel.lineTo(286,220);
pincel.stroke();
//linea 8 Pierna izquierda
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(346,376);
pincel.lineTo(286,430);
pincel.stroke();
//linea 9 Pierna derecha
pincel.fillStyle = "black"
pincel.lineWidth = 8;
pincel.beginPath();
pincel.moveTo(346,376);
pincel.lineTo(410,430);
pincel.stroke();
 