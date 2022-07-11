<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:useBean id="carreras" class="beans.CarrerasBean"/>
<jsp:useBean id="materias" class="beans.MateriasBean"/>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="df" uri="/WEB-INF/dataForm.tld" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>UBP</title>
	<link rel="stylesheet" href="css/estilos.css">
	<link rel="icon" type="image/png" sizes="32x32" href="https://www.ubp.edu.ar/wp-content/themes/ubp_nuevo/images/favicon/favicon-32x32.png">
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
	<script src="js/functions.js"></script>
</head>
<body>
	<% response.setIntHeader("Refresh", 30); %>
	<div class="container">
		<form action="mailto:tomaslicenciado@gmail.com" method="post" enctype="text/plain" class="form-label" id="form1" name="form1">
			<div class="cabecera">
				<div><img src="https://www.ubp.edu.ar/wp-content/themes/ubp_nuevo/images/logo-ubp.png"></div>
				<div><h1 class="titulo">Inscripción a Materias - UBP</h1></div>
				<div><input type="hidden" name="Fecha de operación" value="<df:dataform/>"><df:dataform/></div>
			</div>
			<hr>
			<div class="data">
				<div id="personalData">
					<h1>Datos Personales</h1>
					<div>
						<label>Nombre: </label>
						<input type="text" name="Nombre" id="Nombre" required>
					</div>
					<div>
						<label>Apellido:</label>
						<input type="text" name="Apellido" id="Apellido" required>
					</div>
					<div>
						<label>Teléfono:</label>
						<input type="text" class="simpleNumber" step="0.001" name="Telefono" id="Telefono" required 
						pattern="([0-9]{3})?[0-9]{10}" title="Ingrese un número de teléfono correcto. Puede o no incluir el 0 y el 15 en caso de celular">
					</div>
					<div>
						<label>Tipo de docuemnto:</label>
						<select name="Tipo_Documento" id="Tipo_Documento">
							<option value="DNI">DNI</option>
							<option value="Pasaporte">Pasaporte</option>
							<option value="Otro">Otro</option>
						</select>
					</div>
					<div>
						<label>Número de documento:</label>
						<input type="text" class="simpleNumber" step="0.001" name="Documento" id="Documento" required 
						pattern="[0-9][1-9][0-9]{6}" title="Ingrese un número de Dcoumento correcto de 8 dígitos. Complete con 0 si el número es de 7 dígitos.">
					</div>
					<div>
						<label>Nacionalidad:</label>
						<select name="Nacionalidad" id="Nacionalidad" onchange="mifuncion(this)">
							<option value="Argentina">Argentina</option>
							<option value="Chile">Chile</option>
							<option value="Uruguay">Uruguay</option>
							<option value="Paraguay">Paraguay</option>
							<option value="Otro">Otro</option>
						</select>
						<br>
						<input type="text" name="" id="OtraNacionalidad" hidden>
					</div>
				</div>
				<div id="careerData">
					<h1>Carrera y Materias</h1>
					<div>
						<label>Carrera:</label>
						<select name="Carrera" id="Carrera" onchange="mifuncion(this)">
							<c:forEach var="i" begin="0" end="2">
								<jsp:setProperty name="carreras" property="index" value="${i}"/>
								<option value="<jsp:getProperty name='carreras' property='carrera'/>"><jsp:getProperty name='carreras' property='carrera'/></option>
							</c:forEach>
						</select>
					</div>
					<div>
						<fieldset name="MateriasField" id="materias">
							<legend>Materias</legend>
							<c:choose>
								<c:when test="${not empty param.carreraSeleccionada}">
									<jsp:setProperty property="carrera" name="materias" param="carreraSeleccionada"/>
								</c:when>
								<c:otherwise>
									<jsp:setProperty property="carrera" name="materias" value="Informática"/>
								</c:otherwise>
							</c:choose>
							<c:forEach var="i" begin="0" end="4">
								<jsp:setProperty property="index" name="materias" value="${i}"/>
								<input id="chb${i}" type="checkbox" name="Materia" value="<jsp:getProperty property="materia" name="materias"/>">
								<label for="chb${i}"><jsp:getProperty property="materia" name="materias"/></label>
								<br>
							</c:forEach>
						</fieldset>
					</div>
				</div>
			</div>
			<hr>
			<div id="enviar">
				<input type="submit" value="Enviar" class="btn-danger">
			</div>
		</form>
		
		<form name="selCarrera" action="index.jsp" method="post">
			<input type="hidden" name="carreraSeleccionada">
		</form>
	</div>
	<div id="pie">
	</div>
</body>
</html>