function mostrar()
{
//tomo la edad  
var laedad;
var ecivil;

laedad = document.getElementById("edad").value ;
ecivil = document.getElementById("estadoCivil").value ;

if (laedad <18 && ecivil != "Soltero")
{
    alert ('Es muy pequeño para NO ser soltero.') ;
}


}//FIN DE LA FUNCIÓN