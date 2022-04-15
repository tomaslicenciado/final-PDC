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

var url = document.getElementById("url");
var bt1 = document.getElementById("m1");

$(bt1)[0].click(function(){
    var link1 = document.getElementById("link");
            
    $(link1)[0].html["<h5> propiedad inner HTML </h5>",
                "< a href = \" ",$(url).val(),"\"target = \"_blank\ ">
                "hipervinculo1</a><br>"].join("");
});
