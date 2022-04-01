$(document).ready(function(){
    $("pa1").css("backgroun-color","#0f0");
    $("pa2").css({color: "#FF0",
                  backgroundColor: "#000"});
    $("[name=texto]").append("%");
    $("[name=parrafos]>p").append("&");
    var parrafos=$("[id*=pa]").toArray();//busca todos los que tengan "pa" en el id
    parrafos.forEach(p => {$(p).append("~")});
})

