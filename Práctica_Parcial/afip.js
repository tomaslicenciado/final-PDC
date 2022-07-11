var items = [
    {
        cantidad : 5,
        descripcion : "Zapatos",
        importe : 3500,
        descuento : 0,
        impuesto : 21
    }
];

$(document).ready(function () {
    $("#items").html($("#items").children().children())
    items.forEach(item => {
        $("#items").append("<tr><td>"+item.cantidad+"</td><td>"+
                                    item.descripcion+"</td><td>"+
                                    item.importe+"</td><td>"+
                                    item.descuento+"</td><td>"+
                                    item.impuesto+"</td><td>"+
                                    calcMonto(item.cantidad,item.importe,item.descuento,item.impuesto)+"</td></tr>");
        console.log(item);
    });
    $("#items").append("<tr><td><input type=\"number\" min=\"0\" id=\"newItCant\" onchange=\"nuevoMonto()\"></td>"+
                    "<td><input type=\"text\" id=\"newItDescr\"></td>"+
                    "<td><input type=\"number\" min=\"0\" id=\"newItImport\" onchange=\"nuevoMonto()\"></td>"+
                    "<td><input type=\"number\" min=\"0\" id=\"newItDesc\" onchange=\"nuevoMonto()\"></td>"+
                    "<td><input type=\"number\" min=\"0\" id=\"newItImp\" onchange=\"nuevoMonto()\"></td>"+
                    "<td id=\"newItMonto\" onchange=\"calcTotal()\"></td>"+"</tr>");
    
    $("#items").append("<tr><td></td><td></td><td></td><td></td><td>TOTAL</td><td id=\"total\"></td></tr>");

    calcTotal();
})

function calcMonto(cant, importe, desc, imp){
    var temp = cant * importe;
    if (desc > 0) temp = temp * (100 - desc) / 100;
    if (imp > 0) temp = temp * (1+(imp/100));
    return  temp.toFixed(2);
}

function nuevoMonto(){
    $("#newItMonto").html(calcMonto(parseFloat($("#newItCant").val()).toFixed(2),
                                    parseFloat($("#newItImport").val()).toFixed(2),
                                    parseFloat($("#newItDesc").val()).toFixed(2),
                                    parseFloat($("#newItImp").val()).toFixed(2)));
}

function calcTotal(){
    var its = $("#items tr").find("td:last");
    var lg = its.length;
    var sum = 0;
    for (i = 0; i< lg-2; i++){
        sum = sum + Number(its.get(i).innerText);
    }
    $("#total").html(sum.toFixed(2));
}

/*$(document).ready(function(){
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
}*/