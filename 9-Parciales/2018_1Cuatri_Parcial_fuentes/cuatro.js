function mostrar()
{
    {
        //Declaración
        var numeroUno;
        var numeroDos;
        var operacion;
        var tipoDeDato;
    
        //Ingreso de datos
        numeroUno=prompt("Ingresar primer número");
        numeroDos=prompt("Ingresar segundo número");
    
        //Lógica
        if(numeroUno==numeroDos)
        {
            operacion=numeroUno+numeroDos;
            tipoDeDato="String";
        }else
        {
            numeroUno=parseInt(numeroUno);
            numeroDos=parseInt(numeroDos);
    
            if(numeroUno>numeroDos)
            {
                operacion=numeroUno-numeroDos;
            }else
            {
                operacion=numeroUno+numeroDos;
            }
        }
    
        //Mostrar resultado
        if(operacion>10&&tipoDeDato!="String")
        {
            alert("La suma es "+operacion+" y superó el 10");
        }else
        {
            alert(operacion);
        }
    }
}
