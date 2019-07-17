function mostrar()
{
    var sexo;

    sexo = prompt ("ingrese 'f' o 'm':"); 

    sexo=sexo.toLowerCase();
        
        while (sexo != "f" && sexo != "m") 
{
    sexo = prompt ("error, ingrese nuevamente");
}

    document.getElementById("Sexo").value=sexo;
}//FIN DE LA FUNCIÓN