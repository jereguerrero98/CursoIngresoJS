function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=prompt ("Ingrese numero uno");
    numeroDos=prompt ("Ingrese numero dos");

    if (numeroUno==numeroDos){

        alert (numeroUno+numeroDos);
    
    }else
    { numeroUno=parseInt(numeroUno);
      numeroDos=parseInt(numeroDos);

    if (numeroUno>numeroDos){

        alert (numeroUno/numeroDos);

    }     
    resultado=numeroUno/numeroDos
    alert (resultado); 
}
