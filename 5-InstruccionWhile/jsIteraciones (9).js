function mostrar()
{

	
	var numero;
	var maximo=0;
	var minimo=10**99;
	var respuesta='si';

	while(respuesta!="no")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt("Ingrese un número válido");
			numero=parseInt(numero);
		}

		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero
		}
	
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;

		respuesta=prompt("Continuar ingresando (si/no)");
	}



}//FIN DE LA FUNCIÓN