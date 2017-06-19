/*aquí va tu código*/

function guardarDato(){

	var nombre=document.getElementById('clave').value;
	var posteo=document.getElementById('valor').value;
	localStorage.setItem(nombre, posteo);

	var cajaComent = document.getElementById('ale'); //espacio contenedor
	cajaComent.innerHTML="";

	for (var i = 0; i < localStorage.length; i++){
			var kei = localStorage.key(i);
			var coment = localStorage.getItem(kei);

			var cont=document.createElement('div');
			cont.classList.add('contiene');

			var persona = document.createElement('h4');
			var dato = document.createTextNode(kei);
			persona.classList.add('titulo');
			persona.appendChild(dato);

			var comenta = document.createElement('p');
			var info = document.createTextNode(coment);
			comenta.classList.add('informacion');
			comenta.appendChild(info);

			
			cont.appendChild(persona);
			cont.appendChild(comenta);
			cajaComent.appendChild(cont);
		
	}

}

function borrarDato(){
	window.localStorage.clear();
	guardarDato();
}