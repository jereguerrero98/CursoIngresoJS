function mostrar()
{ 
//tomo la edad  
var laedad;

laedad=document.getElementById('edad').value;

if (laedad <13 )
{
    alert ("usted es un niño")
} 
else 
{ 
    if (laedad <17 )
    {
    alert ("es adolescente") 
    } 
    else 
    { 
    alert("es mayor de edad")
    }


}
}