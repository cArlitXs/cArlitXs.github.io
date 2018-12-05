/*---Conteo regresivo al 28/07/2019---*/
// Set the date we're counting down to
var conteoRegresivo = new Date("Jul 28, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var ahora = new Date().getTime();
  var intervalo = conteoRegresivo - ahora;
  var dias = Math.floor(intervalo / (1000 * 60 * 60 * 24));
  var horas = Math.floor((intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((intervalo % (1000 * 60)) / 1000);
  document.getElementById("conteo").innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
  if (intervalo < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "El tiempo ha expirado";
  }
}, 1000);
