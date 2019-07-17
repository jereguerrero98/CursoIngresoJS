function mostrar()
{
//tomo la edad  

/* switch (variable) 
case (POSIBLES VALORES)
ej: case 'variable': ..... para cortar ejecucion usar termino break;
ej: case 18 == "18" Verdadero
ej: case 18 === "18" FALSO 

*/
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
    case "Enero":
    alert ("que comiences bien el año!!!.");
    break;

    case "Marzo":
    alert ("a clases!!!.");
    break;

    case "Julio":
    alert ("se vienen las vacaciones!!!.");
    break;

    case "Diciembre":
    alert ("Felices fiesta!!!.");
    break; 
}




}//FIN DE LA FUNCIÓN