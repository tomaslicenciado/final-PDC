/*var jUtils ={
    cambiarColres: function(){

        $("#bloque p:equ(0)").css("color","ff0000");
        $("#bloque p:equ(1)").css("color","00ff00");
        $("#bloque p:equ(2)").css("color","0000ff");
    },
    cambiarTextoParrafoHijo : function(){
        $("#bloque p").append("/");
    },

    cambiarColorFondo : function(){
        $("#parrafo").parent().css("background-color","#ff00ff");
        $("#parrafo").css("background-color","#00ffff");
        
    },

    cambiarColor : function(){
        $("#Titulo").css("color","ff0000");
    },

    cambiarTexto : function(){
        $("#Titulo").text("Que poronga estamos haciendo");
    },

    cambiarTamanoLetra : function(){
        $("#Titulo").css("font-size", "40pts");
    },

    crearLinks : function(){
        if($.trim("$texto1").val()==" "){
            alert("falta URL1");
            $("#texto1").focus();
            return;
        }
        else if($.trim("$texto2").val()==" "){
            alert("falta URL2");
            $("#texto2").focus();
            return;
        
        }

        var link1 = $("#link1");
            
        link1.html["<h5> propiedad inner HTML </h5>",
                    "< a href = \" ",$("#texto1").val(),"\"target = \"_blank\ ">
                    "hipervinculo1</a><br>",
                    "< a href = \" ",$("#texto2").val(),"\"target = \"_blank\ ">
                    "hipervinculo2</a><br>"].join("");


        var link2 = $("#link2");

        link2.append($("<h5></h5>").text("Metodo D.O.M"));
        
        link2.append($("<a></a>").text("Hipervinculo1").attr({"href":$("#texto1").val(),"target":"_blank"}));
        
        link2.append($("<br>"));
        

        var a = $("<a></a>");
        $(a).text= ("hipervinculo2");
        $(a).attr= ({"href":$("#texto2").val(), "target":"_blank"});
        link2.append(a);
        link2.append($("<br>"));
        


        link2.append($("<a></a>").text("hiperbinculo").attr({"href":$("#texto1").val(),"target":"_blanck"}));
        link2.append("<br>");
        
        
    }
};*/

var url = $('#url');
var btn1 = $('#m1');

$(btn1).click(function () { 
    if ($.trim($(url).val()) == ""){
        alert("No hay url");
        $(url).focus();
        return;
    }
    if ($(url).val().toLowerCase().indexOf("http") < 0){
        $(url).val(["https://",$(url).val()].join(""));
    }
    $('#link').html(["<h5> Método Inner HTML </h5>",
                    "<a href=\" ",$(url).val(),"\"target =\"_blank\">Link con método 1</a><hr>"].join(""));
});

var btn2 = $('#m2');

$(btn2).click(function () { 
    if ($.trim($(url).val()) == ""){
        alert("No hay url");
        $(url).focus();
        return;
    }
    if ($(url).val().toLowerCase().indexOf("http") < 0){
        $(url).val(["https://",$(url).val()].join(""));
    }
    $('#link').append($('<h5></h5>').text("Método DOM en una línea"));
    $('#link').append($("<a></a>").text("Link con método 2").attr({"href": $(url).val(), "target": "_blank"}));
    $("#link").append($("<hr>"));
});

var btn3 = $('#m3');

$(btn3).click(function () { 
    if ($.trim($(url).val()) == ""){
        alert("No hay url");
        $(url).focus();
        return;
    }
    if ($(url).val().toLowerCase().indexOf("http") < 0){
        $(url).val(["https://",$(url).val()].join(""));
    }
    var a = $("<a></a>");
    $('#link').append($('<h5></h5>').text("Método DOM con creación de variable"));
    $(a).text("Link con método 3");
    $(a).attr({"href": $(url).val(), "target": "_blank"});
    $("#link").append(a);
    $("#link").append($("<hr>"));
});