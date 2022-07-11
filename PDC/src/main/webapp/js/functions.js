$(document).ready(function(){
	if (sessionStorage.carrera!=undefined) document.getElementById("Carrera").value=sessionStorage.carrera;
	if (sessionStorage.nombre!=undefined) document.getElementById("Nombre").value=sessionStorage.nombre;
	if (sessionStorage.apellido!=undefined) document.getElementById("Apellido").value=sessionStorage.apellido;
	if (sessionStorage.telefono!=undefined) document.getElementById("Telefono").value=sessionStorage.telefono;
	if (sessionStorage.tDoc!=undefined) document.getElementById("Tipo_Documento").value=sessionStorage.tDoc;
	if (sessionStorage.documento!=undefined) document.getElementById("Documento").value=sessionStorage.documento;
	if (sessionStorage.nacionalidad!=undefined){
		document.getElementById("Nacionalidad").value=sessionStorage.nacionalidad;
		mifuncion(document.getElementById("Nacionalidad"));
	}
	if (sessionStorage.oNacionalidad!=undefined) document.getElementById("OtraNacionalidad").value=sessionStorage.oNacionalidad;
	if (sessionStorage.materiasSeleccionadas!=undefined){
		let checks = JSON.parse(sessionStorage.materiasSeleccionadas);
		for (i=0;i<checks.length;i++){
			document.getElementById(checks[i]).checked = true;
		}
	}
	
	
	setInterval(cargarEnStorage,5000);
	
	document.getElementById('form1').onsubmit = (function (ev) {	
		let materiasSeleccionadas = $('#materias input:checkbox:checked');
	    if (materiasSeleccionadas!=null && materiasSeleccionadas.length == 0) {
	        ev.preventDefault();
	        alert("Por favor, seleccione al menos una materia");
	    }
	    
	});
});


function mifuncion(obj){
	if (obj.id == "Carrera"){
		let carrera = document.getElementById("Carrera");
		if (carrera!=null && ((sessionStorage.carrera!=undefined && sessionStorage.carrera!=carrera.value) ||(sessionStorage.carrera==undefined)))
			cargarEnStorage();
			sessionStorage.removeItem('materiasSeleccionadas');
			document.selCarrera.carreraSeleccionada.value=carrera.value;
			document.selCarrera.submit();
	}
	else if (obj.id=="Nacionalidad"){
		let nacionalidad = document.getElementById("Nacionalidad");
		if (nacionalidad!=null && nacionalidad.value=="Otro"){
			let nuevaNac = document.getElementById("OtraNacionalidad");
			if (nuevaNac!=null){
				nacionalidad.setAttribute("name","");
				nuevaNac.setAttribute("name","Nacionalidad");
				nuevaNac.removeAttribute("hidden");
				nuevaNac.setAttribute("required","");
			}
		}
		else if (nacionalidad!=null && nacionalidad.value!="Otro"){
			let nuevaNac = document.getElementById("OtraNacionalidad");
			if (nuevaNac!=null){
				nuevaNac.setAttribute("name","");
				nacionalidad.setAttribute("name","Nacionalidad");
				nuevaNac.removeAttribute("required");
				nuevaNac.setAttribute("hidden","");
			}
		}
	}
}


function cargarEnStorage(){
	let carrera = document.getElementById("Carrera");
	let nombre = document.getElementById("Nombre");
	let apellido = document.getElementById("Apellido");
	let telefono = document.getElementById("Telefono");
	let tDoc = document.getElementById("Tipo_Documento");
	let documento = document.getElementById("Documento");
	let nacionalidad = document.getElementById("Nacionalidad");
	let oNacionalidad = document.getElementById("OtraNacionalidad");
	
	if (carrera!=null) sessionStorage.setItem('carrera',carrera.value);
	if (nombre!=null) sessionStorage.setItem('nombre',nombre.value);
	if (apellido!=null) sessionStorage.setItem('apellido',apellido.value);
	if (telefono!=null) sessionStorage.setItem('telefono',telefono.value);
	if (tDoc!=null) sessionStorage.setItem('tDoc',tDoc.value);
	if (documento!=null) sessionStorage.setItem('documento',documento.value);
	if (nacionalidad!=null) sessionStorage.setItem('nacionalidad',nacionalidad.value);
	if (oNacionalidad!=null) sessionStorage.setItem('oNacionalidad',oNacionalidad.value);
	
	let materiasSeleccionadas = $('#materias input:checkbox:checked');
	if (materiasSeleccionadas!=null && materiasSeleccionadas.length != 0) {
		let checks = [];
		for (i=0; i<materiasSeleccionadas.length;i++) checks.push(materiasSeleccionadas[i].id);
		sessionStorage.setItem("materiasSeleccionadas",JSON.stringify(checks));
	}
}