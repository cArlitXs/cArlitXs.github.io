/*---Conteo regresivo al 28/07/2019---*/
var conteoRegresivo = new Date("Jul 28, 2019 00:00:00").getTime();
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
    document.getElementById("conteo").innerHTML = "El tiempo ha expirado";
  }
}, 1000);

/*---LOADER---*//*
window.onload = function(){
	setTimeout(function(){
	var loader = document.getElementsByClassName("loader")[0];
	loader.className="loader fadeout" ;
	setTimeout(function(){loader.style.display="none"},1000)
	},1000)
}*/
window.onload = function(){
  let contenedor = document.getElementById('content');
  let nav = document.getElementById('browser');
  contenedor.style.visibility = 'hidden';
  contenedor.style.transition = "all 1s";
  contenedor.style.opacity = '0';
  nav.classList.add("bounceIn");
}
