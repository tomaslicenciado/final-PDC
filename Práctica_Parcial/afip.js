$(document).ready(function(){
    if (localStorage.cuit == '')
        $("#launchModal").trigger('click');
    
    var cuit = localStorage.cuit;
    $("#idNavBar").append(cuit);
})

function verifyLogin() {
    var cuit = $("#inputCuit").val();
    var pass = $("#inputPassword").val();
    var validation=  /^[0-9]{2}-[0-9]{8}-[1-9]{1}$/;
    if (validation.test(cuit)){
        var passvalidation = /^[A-Za-z0-9]\w{7,14}$/;
        if (passvalidation.test(pass)){
            localStorage.cuit = cuit;
            console.log(localStorage.cuit)
            alert("Bienvenido");
            location.reload();
        }
        else{
            alert("La contraseña debe tener entre 7 y 14 caracteres conteniendo sólo mayúsculas, minúsculas o números");
            localStorage.cuit = '';
        }
    }
    else{
        alert("El CUIT ingresado no es válido");
        localStorage.cuit = '';
    } 
}

function logout(){
    localStorage.cuit = '';
    location.reload();
}