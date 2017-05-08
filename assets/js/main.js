function Squad(nombre,apellido,edad,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbie1 = hobbie1;
	this.hobbie2 = hobbie2;
	this.hobbie3 = hobbie3;
	this.imprimir = function(){
		var imprimir = ("<br><strong> Nombre: </strong>" + this.nombre + " " + this.apellido + "<br><strong>Edad: </strong>" + this.edad +
		 " años<br><strong>Hobbies: </strong><li>" + this.hobbie1 +"</li><li>" + this.hobbie2 +"</li><li>"+ this.hobbie3+"</li><br>");

		return imprimir;
	}
}

var gilia = new Squad("Gilia","Góngora",28, "Escuchar música", "Comer", "Dormir");
var trini = new Squad("Trinidad","Fuentes", 26, "Video Juegos", "Apreciación de pugs", "Dormir");
var diana = new Squad("Diana", "Monsalve", 29, "Hacer scratch", "Música", "Negocios");
var vale = new Squad("Valentina", "Toledo", 20, "Jugar fútbol", "Música", "Actividades al aire libre");
var kari = new Squad("Karina", "Palacios", 24, "Ver Series", "Compartir con amigos", "Leer");
var maribel = new Squad("Maribel", "Diaz", 30, "Tomar café con muffins", "Guardar silencio", "Escribir");
var pez = new Squad("María Paz", "Rojas", 26, "Música", "Comer", "Hablar inglés");
var dani = new Squad("Daniela","Sánchez",24,"Escuchar música","Comer","Tomar Cervecita")
var val = new Squad("Valentina", "López", 25, "Tarot", "Idiomas", "Películas mudas");

gilia.imprimir();
trini.imprimir();
diana.imprimir();
vale.imprimir();
kari.imprimir();
maribel.imprimir();
pez.imprimir();
dani.imprimir();
val.imprimir();

document.getElementById("gilia").innerHTML = gilia.imprimir();
document.getElementById("trini").innerHTML = trini.imprimir();
document.getElementById("diana").innerHTML = diana.imprimir();
document.getElementById("vale").innerHTML = vale.imprimir();
document.getElementById("kari").innerHTML = kari.imprimir();
document.getElementById("maribel").innerHTML = maribel.imprimir();
document.getElementById("pez").innerHTML = pez.imprimir();
document.getElementById("dani").innerHTML = dani.imprimir();
document.getElementById("val").innerHTML = val.imprimir();


function comment(mensaje){
	var userComment = document.getElementById("comentario");
	
	var showComment = document.getElementById("comment");
	showComment.innerHTML += userComment.value;
	userComment.value = " ";
}

