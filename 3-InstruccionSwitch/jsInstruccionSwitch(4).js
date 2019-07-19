function mostrar()
{
//tomo la edad  

//alert (mesDelAño);

var mesDelAño = document.getElementById("mes").value ;

switch(mesDelAño){
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre": {
        alert("Tienen 30 dias.");

    }
    break;
    case "Febrero": {
        alert("Tiene 28 dias.");
        break;
    }
    default:{
        alert("Tiene 31 dias.");

    }
}


}//FIN DE LA FUNCIÓN