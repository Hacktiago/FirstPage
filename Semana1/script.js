console.log("Script loaded!");
var form1 = document.getElementById("form-1");

form1.addEventListener("submit", function(event){
	var name = form1.elements["name"].value
	event.preventDefault();
	const data = Object.fromEntries(new FormData(event.target).entries());
	console.log(event);
	console.log("submit");
	console.log(data);
	var content = document.getElementById("content");
	content.innerHTML = "<h1>Datos registrados</h1>";
	content.innerHTML += "<p>Nombre : " + data.name + "</p>";
	content.innerHTML += "<p>Apellidos : " + data.apellidos + "</p>";
	content.innerHTML += "<p>Email : " + data.Email + "</p>";
	content.innerHTML += "<p>Number : " + data.number + "</p>";
	content.innerHTML += "<p>Direccion : " + data.direccion + "</p>";
	content.innerHTML += "<p>Fecha de Nacimiento : " + data.nacimiento + "</p>";
	content.innerHTML += "<p>Estatura : " + data.estatura + "</p>";
	content.innerHTML += "<p>Contraseña : " + data.Password + "</p>";
	var array = example();
});

function example (){

	return[] 
} 

var news1 = document.getElementById("news1");
var news2 = document.getElementById("news2");
var news3 = document.getElementById("news3");
var news4 = document.getElementById("news4");

/*
Aca lo unico que hice fue copiar y pegar, no logre obtener el dato del H3
soy consiente de que se debe mejorar muchisimo.
*/
news1.addEventListener("click", function(event){
	var content = document.getElementById("content");
	content.innerHTML = "<h1>Xavi Entrenador</h1>";
});

news2.addEventListener("click", function(event){
	var content = document.getElementById("content");
	content.innerHTML = "<h1>¿Debería el Barça fichar a Dani Alves?</h1>";
});

news3.addEventListener("click", function(event){
	var content = document.getElementById("content");
	content.innerHTML = "<h1>¿Por qué se funde el Barça en los 20 últimos minutos?</h1>";
});

news4.addEventListener("click", function(event){
	var content = document.getElementById("content");
	content.innerHTML = "<h1>Oficial: el Bayern-Barça, a puerta cerrada</h1>";
});