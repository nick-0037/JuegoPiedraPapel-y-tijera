// Inicializamos las variables
let seleccionar = ["piedra", "papel", "tijera"];
let victoriasJugador = 0;
let victoriasComputadora = 0;
let historialJuego = [];


// Una funcion llamada jugar con el parametro de numero
function jugar(numero) {
  // Declaramos una varible para obtener el numero de la computadora
  let computadora = Math.floor(Math.random() * 3);
  // Creamos un if para obtener el numero de el jugador y la pc, los comparamos para ver si es empate
  if (seleccionar[numero] == seleccionar[computadora]) {
    // Imprime en el HTML el resultado que en este caso es empate
    document.getElementById("resultado").innerHTML = "empate"
    // Un else if en caso de que no ocurra la otra condicion, evaluar si piedra y tijera para ganar 
  } else if (seleccionar[numero] == "piedra" && seleccionar[computadora] == "tijera") {
    // Imprime en el HTML el resultado que en este caso es ganaste
    document.getElementById("resultado").innerHTML = "ganaste" 
    // Una variable para sumar uno cada vez que se cumpla esta condicion 
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
  // Imprimo en el HTML las victorias
  document.getElementById("victorias").innerHTML = "Victorias:" + victoriasJugador;
  document.getElementById("victoriasComputadora").innerHTML = "Victorias:" + victoriasComputadora;
  /* Esta condicion es para evaluar si las victorias del jugador o  las victorias de la computadora 
   se reinicien a 0 lleguen a 5*/
  if (victoriasJugador == 5 || victoriasComputadora == 5) {
    // Con estas variables se reinician
    victoriasJugador = 0;
    victoriasComputadora = 0;
    // Esto imprime en el HTML si la condicion se cumple que se coloquen las victorias en 0 
    document.getElementById("victorias").innerHTML = "Victorias:0" 
    document.getElementById("victoriasComputadora").innerHTML = "Victorias:0" 
    document.getElementById("resultado").innerHTML = "Juega!"
    // Borra la lista
    historialJuego = [];
    // Si la condicion no se cumple el else sigue agregando elementos a la array
  } else {
    //Agregamos el historial de juego
    historialJuego.unshift(`${seleccionar[numero]} - ${seleccionar[computadora]}`);
  }
    //Eliminamos el ultimo elemento si el historial supera 5
    if(historialJuego.length > 5){
      historialJuego.pop();
  }
    //Imprimimos el historial de juego en el HTML
    document.getElementById("historialJuego").innerHTML = historialJuego.join("<br>");

  // Esto metodo que se le coloco a la varible historial es para agregar uno o mas elementos al comienzo del array maneras de hacerlo:
  // historialJuego.unshift(`${seleccionar[numero]} - ${seleccionar[computadora]}`);
  // historialJuego.unshift(seleccionar[numero] + "-" + seleccionar[computadora]);
} 