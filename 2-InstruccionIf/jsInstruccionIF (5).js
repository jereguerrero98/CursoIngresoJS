function mostrar()
{
//tomo la edad  
/* 
var laedad;

laedad=document.getElementById("edad").value;

if (!(laedad >=13 && laedad <=17))
{ 
    alert ("usted no es un adolescente");
} 
*/

    var precio; 

    precio=document.getElementById("edad").value;

        if (precio < 25)
    {
        alert ("Es barato");
    }else
    {
        if (precio >75)
    {
        alert ("Es caro");
    }else
    {
        alert ("Esta bien");
    }

}
} //FIN DE LA FUNCIÓN