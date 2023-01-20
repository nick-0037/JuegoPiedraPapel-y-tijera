var seleccionar = ["piedra", "papel", "tijera"];
var victoriasJugador = 0;
var victoriasComputadora = 0;
var historialJuego = [];
var historialJuego2 = [];

function jugar(numero) {
  var computadora = Math.floor(Math.random() * 3);
  if (seleccionar[numero] == seleccionar[computadora]) {
    document.getElementById("resultado").innerHTML = "empate"
  } else if (seleccionar[numero] == "piedra" && seleccionar[computadora] == "tijera") {
    document.getElementById("resultado").innerHTML = "ganaste" 
    victoriasJugador++; 
  } else if (seleccionar[numero] == "piedra" && seleccionar[computadora] == "papel") {
    document.getElementById("resultado").innerHTML = "perdiste"
    victoriasComputadora++;
  } else if (seleccionar[numero] == "papel" && seleccionar[computadora] == "piedra") {
    document.getElementById("resultado").innerHTML = "ganaste"
    victoriasJugador++;
  }  else if (seleccionar[numero] == "papel" && seleccionar[computadora] == "tijera") {
    document.getElementById("resultado").innerHTML = "perdiste"
    victoriasComputadora++;
  } else if (seleccionar[numero] == "tijera" && seleccionar[computadora] == "papel") {
    document.getElementById("resultado").innerHTML = "ganaste"
    victoriasJugador++;
  } else if (seleccionar[numero] == "tijera" && seleccionar[computadora] == "piedra") {
    document.getElementById("resultado").innerHTML = "perdiste"
    victoriasComputadora++;
  } 
  document.getElementById("victorias").innerHTML = "Victorias:" + victoriasJugador;
  document.getElementById("victoriasComputadora").innerHTML = "Victorias:" + victoriasComputadora;
  if (victoriasJugador == 5 || victoriasComputadora == 5) {
    victoriasJugador = 0;
    victoriasComputadora = 0;
    document.getElementById("victorias").innerHTML = "Victorias:0" 
    document.getElementById("victoriasComputadora").innerHTML = "Victorias:0" 
  } 
  var historialJuego = document.getElementById("historialJuego").innerHTML += seleccionar[numero] + " -";
  var historialJuego2 = document.getElementById("historialJuego2").innerHTML += seleccionar[computadora];

  return historialJuego, historialJuego2;
} 

function historialDelJuego() {
  var historial =  historialJuego = historialJuego2
  historial = document.getElementById("historialJuego, historialJuego2");
}
