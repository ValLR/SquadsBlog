function Squad(nombre,apellido,edad,hobbie1,hobbie2,hobbie3){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbie1 = hobbie1;
	this.hobbie2 = hobbie2;
	this.hobbie3 = hobbie3;
	this.imprimir = function(){
		var imprimir = ("<b><strong> Nombre: </strong>" + this.nombre + " " + this.apellido + "<br><strong>Edad: </strong>" + this.edad +
		 "<br><strong>Hobbies: </strong><li>" + this.hobbie1 +"</li><li>" + this.hobbie2 +"</li><li>"+ this.hobbie3+"</li><br>");

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
	var arr = [];
	var comentario = document.getElementById("texto").value;
	var caja = document.getElementById("coment1");

	var newComment = caja.innerHTML = comentario;

	arr.push(newComment);
}

/*
function Miembro (nombre,edad,hobb1,hobb2,hobb3){
		this.nombre = nombre;
		this.edad = edad;
		this.hobb1 = hobb1;
		this.hobb2 = hobb2;
		this.hobb3 = hobb3;
		this.imprimir = function(){
			var imprimir =  ("<b>" + "Nombre: " + "</b>"+ this.nombre + "<br>" +"<b>" + "Edad: " + 
                    "</b>" + this.edad + "<br>"+"<b>" + "Hobbies: " + "</b>" + "<li>" + 
                    this.hobb1 +"<li>" + this.hobb2 +"<li>"+ this.hobb3 + "<br>");

			return imprimir;

		}

	}


var coder1 = new Miembro("Gilia Gongora",28,"Leer","Escuchar música","Ver Pokémon");
var coder2 = new Miembro("Valentina Lopez",25,"Tarot","Idiomas","Películas mudas");
var coder3 = new Miembro("Valentina Toledo",20,"Jugar fútbol","Escuchar música","Actividades al aire libre");
var coder4 = new Miembro("Trinidad Fuentes",26,"Video juegos","PugLover","Dormir");
var coder5 = new Miembro("Diana Monsalve",29,"Mirar memes","Hacer negocios","Comer tablitas");
var coder6 = new Miembro("Daniela Sanchez",24,"Escuchar música","Cantar","Ver series");
var coder7 = new Miembro("María Paz Rojas",26,"Escuchar música","Comer","Tomar cervecita");
var coder8 = new Miembro("Karina Palacios",24,"Ver series","Leer","Escuchar música");
var coder9 = new Miembro("Maribel Díaz",30,"Salir a tomar café","Comer muffins","El silencio y escribir");


coder1.imprimir();
coder2.imprimir();
coder3.imprimir();
coder4.imprimir();
coder5.imprimir();
coder6.imprimir();
coder7.imprimir();
coder8.imprimir();
coder9.imprimir();*/

