
// El ejercicio anterior sin ciclos

var respuestasCorrectas = 0;

var respuesta1 = prompt('pregunta 1');
var respuesta2 = prompt('pregunta 2');
var respuesta3 = prompt('pregunta 3');
var respuesta4 = prompt('pregunta 4');
var respuesta5 = prompt('pregunta 5');

function contadorRespuestas() {
  if(respuesta1 === 'blah') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta2 === 'bleh') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta3 === 'blih') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta4 === 'bloh') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
  if(respuesta5 === 'bluh') {
    respuestasCorrectas = respuestasCorrectas + 1;
  }
}

function imprimirMensajes() {
  if(respuestasCorrectas === 5){
    document.write('Has ganado la corona de oro!');
  }else if(respuestasCorrectas === 3) {
    document.write('Has ganado la corona de plata');
  }else if(respuestasCorrectas < 3){
    document.write('Perdiste :(');
  }
}

contadorRespuestas();
imprimirMensajes();
