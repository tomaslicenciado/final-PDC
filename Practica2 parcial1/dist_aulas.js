function listMatAbog(){
    console.log("Abogacía");
    var checMaterias = $("#checMaterias");
    checMaterias.html("<label for=\"PDC\"><input type=\"checkbox\">PDC</label>");
}

function listMatIng(){
    console.log("Ingeniería");
}

$("#sCarreras").change(function(){
    var valor = $("#sCarreras").val();
    if (valor == 1)
        listMatAbog();
    else
        listMatIng();
})

/*function ValidatePetSelection()  
{  
    var checkboxes = document.getElementsByName("favorite_pet");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 2)  
    {  
        alert("You can't select more than two favorite pets!");  
        return false;  
    }  
}  */