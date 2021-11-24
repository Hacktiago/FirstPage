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
